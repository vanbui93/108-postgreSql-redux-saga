//root saga là điểm bắt đầu, là 1 generator function
//điều phối tất cả saga, khởi động tất cả các saga để chạy nền

import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskFailed, addTaskSuccess,
  fetchListTaskFailed, fetchListTasks, fetchListTaskSuccess,
  updateTaskFailed, updateTaskSuccess,
  deleteTaskSuccess, deleteTaskFailed,
} from './../actions/task';
import { hideLoading, showLoading } from './../actions/ui';
import { addTask, getListTask, updateTask, deleteTask } from './../apis/task';
import { STATUSES, STATUS_CODE } from './../constants/index';
import * as taskTypes from './../constants/task';

/**
 * VÍ DỤ VỀ REDUX-SAGA, miêu tả rõ quy trình của 1 công việc
 * B1: Thực thi action fetch task
 * B2: Gọi api
 *  B2.1: Hiển thị thanh tiến trình (loading)
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * B4: Tắt loading
 * B5: Thực thi các công việc tiếp theo
 */

//fork rẻ nhánh các function

function* watchFetchListTaskAction() {
  while (true) {                                     //dùng vòng lặp vô tận để take khi nào cũng được lắng nghe

    const action = yield take(taskTypes.FETCH_TASK);               //take chạy khi action được dispatch
    //---đoạn code từ đây trở đi bị dừng BLOCK---//
    //SAU KHI FETCH_TASK XONG THÌ CHẠY TIẾP ĐOẠN CODE DƯỚI//
    // console.log(action);
    const { params } = action.payload;

    yield put(showLoading());

    const resp = yield call(getListTask, params);           //call là 1 blocking, khi action được gọi thì mới thực thi và block cho đến khi call xong
    //---BLOCK cho đến khi call xong--//
    console.log('resp:', resp);

    const { status, data } = resp;

    if (status === STATUS_CODE.SUSCESS) {
      //dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      //dispatch action fetchListTaskFailed
      yield put(fetchListTaskFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());

  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);     //sau khi người dùng nhập đến kí tự cuối cùng, nữa giây sau thì mới thực hiện lấy kết quả
  const { keyword } = payload;
  console.log(keyword);

  yield put(
    fetchListTasks({
      q: keyword,
    })
  );
  // const { keyword } = payload;
  // const list = yield select(state => state.task.listTask);
  // const filteredTask = list.filter(task =>
  //   task.title
  //     .trim()
  //     .toLowerCase()
  //     .includes(keyword.trim().toLowerCase()),
  // );
  // yield put(filterTaskSuccess(filteredTask));   //dispatch action filterTaskSuccess
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(updateTask, { title, description, status }, taskEditing.id); //updateTask = (data, taskId) => data = { title, description, status }

  const { data, status: statusCode } = resp;

  if (statusCode === STATUS_CODE.SUSCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  console.log(id);

  yield put(showLoading());
  const resp = yield call(deleteTask, id); //updateTask = (data, taskId) => data = { title, description, status }

  const { data, status: statusCode } = resp;

  if (statusCode === STATUS_CODE.SUSCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {

  //watchFetchListTaskAction luôn luôn thực thi, sau khi takeLatest thì thực thi lại
  yield fork(watchFetchListTaskAction);
  //sau khi action FILTER_TASK ĐÃ được thực thi thì thực hiện takeLatest
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);    //taskLatest lắng nghe action
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}
export default rootSaga;
