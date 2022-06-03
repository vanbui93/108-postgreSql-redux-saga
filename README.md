REACT JS - code được viết trong khi làm training của senior nghiepuit <br>
Kênh youtube : https://www.youtube.com/channel/UCxRgDi15EJsB2ayyP-eg3Tg

## Table of Contents
- [Sử dụng MATERIAL-UI](#sử-dụng-material-ui)
- [install Roboto Font](#install-roboto-font)
- [Font Icons](#font-icons)
- [Install Eslint](#install-eslint)
- [Install Prettier extension](#install-prettier-extension-visual-studio-code)
- [Run json server](#run-json-server)
- [Tích hợp Redux](#tích-hợp-redux)
- [Install Axios](#install-axios)
- [Use BindActionCreators](#use-bindactioncreators)
- [Install Toastify](#install-toastify)
- [Install Redux-Saga](#install-redux-saga)
- [So sánh redux-thunk và redux-saga](#So-sánh-redux-thunk-và-redux-saga)
- [Sử dụng Redux-saga Fork](#sử-dụng-redux-saga-fork)
- [Sử dụng Redux-saga Take](#sử-dụng-redux-saga-take)
- [Sử dụng Redux-saga Call](#sử-dụng-redux-saga-call)
- [Sử dụng Redux-saga Put](#sử-dụng-redux-saga-put)
- [Sử dụng Redux-saga Delay](#sử-dụng-redux-saga-delay)
- [Sử dụng Redux-saga TakeLatest](#sử-dụng-redux-saga-takelatest)
- [Sử dụng Redux-saga Select](#sử-dụng-redux-saga-select)
- [Sử dụng Redux-saga TakeEvery](#sử-dụng-redux-saga-takeevery)
- [Sử dụng Redux Form](#sử-dụng-redux-form)
- [Redux-form: Validation - Ràng buộc dữ liệu](#redux-form-validation---ràng-buộc-dữ-liệu)
- [Install classnames](#Install-classnames)
- [Install react-router-dom](#Install-react-router-dom)
- [Ứng dụng fullStack kết nối API](#ứng-dụng-fullStack-kết-nối-api)
- [Connect PostgreSql](#connect-postgresql)
- [Xử lý lỗi CORS POLICY](#xử-lý-lỗi-cors-policy)

## Install reactjs

- Fix lỗi warning 
```sh
npx react-codemod rename-unsafe-lifecycles
```

## Sử dụng MATERIAL-UI
Dùng https://material-ui.com/ 
để build giao diện nhanh hơn
## // with npm

```sh 
npm install @material-ui/core
```

## install Roboto Font

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Font Icons

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```


## install icon font

```sh 
npm install @material-ui/icons
```

## Install Eslint


Use eslint to clean code https://eslint.org/docs/user-guide/getting-started
```html
https://github.com/yannickcr/eslint-plugin-react
```

Cài đặt tất cả các packages thích nghi với môi trường dự án
`Browser`,`Babel`,`Prettier`,`React eslint`,

```html
https://www.npmjs.com/package/eslint-config-env
```

```sh
npm install eslint --save-dev
```
Then install extension ESlint on Visual studio Code, This will highlight the errors

## Cấu hình ESlint 2 cách
* Sử dụng file tên: `eslinttrc.*`  (* là json, js, yaml)
* Thuộc tính eslintConfig trong file package.json
>Quy tắc
- 0: off
- 1: warn: cảnh báo, code vẫn chạy
- 2: error: lỗi, code dừng

## ESlint: Install babel-eslint 
>ESLint chỉ hổ trợ cho ECMAScript(ES) standard, babel giúp chuyển ES6 sang JS (ES là phiên bản mới ít dc browser hỗ trợ)

```html
https://github.com/babel/babel-eslint
```

```sh
$ npm install eslint babel-eslint --save-dev
```

## ESlint: Install airbnb
```html
https://www.npmjs.com/package/eslint-config-airbnb
```

```sh
npx install-peerdeps --dev eslint-config-airbnb
```
 
```html
https://github.com/airbnb/javascript/tree/master/react
```

## Install Prettier extension (visual studio code)
Prettier extension giúp format code về định dạng đúng như Eslint yêu cầu, vd dấu ' -> " 
=> tự động chuyển code về định dạng đúng
>Để kết hợp Prettier extension với eslint => trên visual studio code => File -> Preferences -> Setting -> search "Eslint" -> tích chọn　✔ integration

```html
https://github.com/prettier/eslint-config-prettier
```

```sh
npm install --save-dev --save-exact prettier
```

```sh
npm install --save-dev eslint-config-prettier
```

## Khai báo biến môi trường để không bị thông báo lỗi
env

## Install husky npm => hỗ trợ check eslint và prettier
>Nếu có lỗi xảy ra thì ko được commit

https://www.npmjs.com/package/husky

```sh
npm install husky --save-dev
```

## Install thêm lint-staged

```sh
npx mrm lint-staged
```
>Xem lại video 118

## Install EditorConfig extension
>Cài đặt editerConfig extension (trên visual studio code)
Dùng để thống nhất cấu hình cho code cho các member (vì có rất nhiều editor như subline, visual studio code)
vd indent: 2

xem thêm tại link https://editorconfig.org/
>Search editorconfig react : có thể lấy y chang về sử dụng

## Run json server
After create db.json file and create object

```sh
json-server db.json
```

## Tích hợp Redux
Tham khảo trang chủ redux
https://redux.js.org/api/applymiddleware

```sh
npm install redux react-redux redux-thunk --save
```

## Install Axios

```sh
$ npm install axios
```

xem thêm npmjs.com/package/axios

>xử lý trả về thành công hay thất bại, sử dụng `Interceptors`

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
// Do something before request is sent
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
return response;
}, function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
return Promise.reject(error);
});
```

## Use BindActionCreators

Khi App của bạn quá lớn việc dispatch từng action rất bất tiện<br>
=> Vì thế có thể sử dụng **BindActionCreators** để chuyển tất các các action thành 1 **Object**.<br>
Và mỗi function trong **Object** sẽ được bao bởi 1 dispatch function cho bạn


## Install Toastify
Dùng để hiển thị thông báo https://www.npmjs.com/package/react-toastify

```sh	
npm install --save react-toastify
```


## Install Redux-Saga
Saga được gọi khi đăng kí theo dõi action
> Dùng để Xử lý lỗi middleware, trì hoãn dispatch
```sh
$ npm install --save redux-saga
```

Hàm **run** để chương trình con bắt đầu theo dõi các **action** <br>
cài đặt trong file `redux/configureStore.js`

```js
sagaMiddleware.run(mySaga)
```
### So sánh redux-thunk và redux-saga

- **Redux-thunk**: Component gọi action => redux-thunk thực hiện action => dispatch => trả về Promise<br>
(view component => `action` => `dispatch(redux-thunk())` => `Promise` => `reducer`)
- **Redux-saga**Component gọi action => redux-saga lắng nghe action => genarator function (saga) trả về Promise<br>
(view component => `action` =>  `yield takeLatest(taskTypes.ACTION_TASK, actionTaskSaga)` =>  `dispatch` => `Promise` => `reducer`)<br>

Mỗi 1 event sẽ có 3 action: <br>
- DELETE_TASK
- DELETE_TASK_SUCCESS
- DELETE_TASK_FAILED<br>
action đầu tiên (DELETE_TASK) báo cho reducer biết sắp có 1 API request<br>
Nếu thành công trả về **DELETE_TASK_SUCCESS**<br>
Nếu thất bại trả về **DELETE_TASK_FAILED**<br><br>

Dưới đây là ví dụ về redux-saga, khi thực hiện lắng nghe 1 action **DELETE_TASK**
```js
import {
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
} from './actions/consts';
import { getDataFromAPI } from './api';

function* deleteTaskSaga({ payload }) {
  try {
    const data = yield call(getDataFromAPI);
    yield put({ type: DELETE_TASK_SUCCESS, payload: id });
  } catch (e) {
    yield put({ type: DELETE_TASK_FAILED, payload: e.message });
  }
}
function* rootSaga() {
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}
```

## Side-Effect (Sử dụng redux-saga)

- Dùng để xử lý Side-Effect và các hoạt động không đồng bộ
- Là những tương tác của ứng dụng với thế giới bên ngoài: giao tiếp API, đọc ghi file, analytics event.
- Thường được xử lý ở action hoặc middleware
>Lưu ý: không xử lý ở reducer, vì reducer là pure function - hàm thuần túy

* Redux-saga sẽ clean code hơn, giải quyết các quy trình phức tạp, dài hạn<br>
Nếu app nhỏ thì nên dùng redux-thunk
* Điểm yếu : Phức tạp, nặng về xử lý, tốn time cho member mới vào team<br>

**Redux-saga**: sử dụng từ khóa **yield** và **genaretor**<br>
Trả về ilterator (lấy giá trị trả về dùng next())

**Iterators** <br>
- Yield trả về iterator có giá trị done là false
- Return trả về iterator có giá trị done là true

```js
function* helloGeneratorFunction() {  //ilterators (giống 1 array)
 yield 2019 //chỉ xuất hiện trong GeneratorFunction
 return "Tự học lập trình redux saga"
}

const result = helloGeneratorFunction();
console.log(result.next()); //=> done: false
console.log(result.next()); //=> done: true

```
Vòng lặp vô tận

```js
function* helloGeneratorFunction() {
  while (true) {
    yield "Tôi đang lắng nghe..."
  }
}
```

Generator trong generator sử dụng yield*
sử dụng yield* để nhường quyền cho 1 generator khác chạy

```js
function* printName() {
  yield 'redux saga'
}
function* hello() {
  yield 'Xin chào'
  yield* printName();
  yield '.Kết thúc.'
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

### Sử dụng Redux-saga Fork
- **Fork** giống như 1 bộ theo dõi, người theo dõi action, là 1 **generator function**
- Dùng để rẽ nhánh như if-else, switch-case
- Fork thuộc redux-saga/effects
- Mỗi fork là : non-blocking, có nghĩa là có thể kích hoạt nhiều bộ theo dõi cùng 1 lúc (dispatch nhiều action cùng lúc)

```js
function* watchFetchListTaskAction() {
  while (true) {  
    //somthings
  }
}
function* watchCreateTaskAction() {
  //somthings
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
```

### Sử dụng Redux-saga Take
- **Take** chỉ chạy khi action được dispatch
- Dùng để phản hồi các action khi action được dispatch
- Fork thuộc redux-saga/effects
- Lệnh take sẽ được kích hoạt và tham gia vào saga khi một action được dispatch. Tạm dừng đến khi nhận action.
- Là blocking

```js
yield take(taskTypes.FETCH_TASK); 
```

### Sử dụng Redux-saga Call
- Thường sử dụng để **request API, call API**
- Là blocking
- Giống thực thi 1 function. Trả về Promise và sẽ tạm dừng saga cho đến khi promise được resolved

```js
const resp = yield call(getListTask);    //getListTask gọi api  ./../apis/task
```

### Sử dụng Redux-saga Put
- Dùng để **dispatch action**
- Là non-blocking (có thể put cùng lúc nhiều action)

```js
yield put(showLoading());   //dispatch action SHOW_LOADING
```
### Sử dụng Redux-saga Delay
- Là blocking
- Để chặn thực thi trong 1 khoảng thời gian miliseconds

```js
function* watchFetchListTaskAction() {
  while (true) {                                     //dùng vòng lặp vô tận để take khi nào cũng được lắng nghe
    yield delay(500);
  }
}
```

### Sử dụng Redux-saga TakeLatest
- Thay thế cho fork: **Là phiên bản của fork** đã được bổ sung
- Hủy bỏ quy trình cũ khi có một quy trình mới bắt đầu.
- Nếu thực hiện một loạt các action, takeLatest chỉ thực thi và lấy kết quả của action cuối cùng.
- Không cần vòng lặp vô hạn

```js
function* filterTaskSaga({ payload }) {
  yield delay(500);     //sau khi người dùng nhập đến kí tự cuối cùng, nữa giây sau thì mới thực hiện lấy kết quả
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task =>
    task.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filteredTask));   //dispatch action filterTaskSuccess
}

function* rootSaga() {
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);               //taskLatest lắng nghe action
}
```

### Sử dụng Redux-saga Select
- **Lấy data** từ store tại saga

```js
const list = yield select(state => state.task.listTask);
```

### Sử dụng Redux-saga TakeEvery
- TakeEvery sử dụng giống TakeLatest, nhưng TakeEvery chạy ngay lập tực nếu được kích hoạt
- không cần tính số lần chạy
- không  biết là action trước đó đã chạy xong chưa
```js
yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
```
### Sử dụng Redux Form
Xem chi tiết trên trang chủ https://redux-form.com/8.3.0/ <br>
cài đặt
```sh
npm install redux-form
```

Làm theo các bước ở đây https://redux-form.com/8.3.0/docs/gettingstarted.md/ <br>
- Trong reducer 

```js
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})
```

- Trong component form (TaskForm)

```js
class TaskForm extends Component {

handleSubmitForm = (data) => {
  console.log('data',data);
}

render() {
<form onSubmit= { handleSubmit(this.handleSubmitForm) } >
    {/* form body*/}
</form>
}

const withReduxForm = reduxForm({
  form: 'formName'
});

export default compose {
  {/* other component*/}
  withReduxForm,
)(TaskForm);
}

}
```
### Redux-form: Validation - Ràng buộc dữ liệu
Xem thêm https://redux-form.com/8.2.2/examples/syncvalidation/ <br>

Synchronous Validation Example - Thực hiện ở phía client
Có 2 cách 
- Điền validaion cho từng Field (Field-Level Validation Example)
- Truyền vào 1 object và validation toàn bộ ở reduxForm (Synchronous Validation Example)

### Cách 1: Điền validaion cho từng Field (Field-Level Validation Example)
```js
required = (value) => {
  let error = 'Vui lòng nhập tiêu đề';
  if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
    error = null;
  }
  return error;
}

minLengths = value => {
  let error = null;
  if (value && value.length < 5) {
    error = 'Tiêu đề phải từ 5 kí tự';
  }
  return error;
}

<Field
  //something
  validate={this.required, this.minLengths}
/>
```

### Cách 2 Truyền vào 1 object và validation (Synchronous Validation Example)

**validate hoạt động dựa vào name của Field**

```js
<Field
  //something
  name="title"
/>

const withReduxForm = reduxForm({
  form: 'formName',
  validate
});

const validate = (values) => {
  const errors = [];
  errors['title'] = 'Lỗi xảy ra'
  return errors;
}
export default validate;
```

### Check Props để submit
props sẽ chuyển state của redux-form thành props

```js
var { invalid,submitting } = this.props;

<Button disabled={invalid || submitting}>Lưu lại</Button>
```
## Nâng cấp chức năng tìm kiếm công việc
sử dụng json-server https://github.com/typicode/json-server#full-text-search

Xem thêm https://www.npmjs.com/package/query-string
```sh
$ npm install --save query-string
```

```js
function* filterTaskSaga({ payload }) {
  yield delay(500);     //sau khi người dùng nhập đến kí tự cuối cùng, nữa giây sau thì mới thực hiện lấy kết quả
  const { keyword } = payload;
  console.log(keyword);

  yield put(
    fetchListTasks({
      q: keyword,
    })
  );
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  //taskLatest chạy sau khi action [FILTER_TASK ĐÃ] chạy
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}
```
### Install react-router-dom
Xem thêm https://reacttraining.com/react-router/web/guides/quick-start
```sh
npm install --save react-router-dom
```

### Install classnames
Để sử dụng nối nhiều classnames ở element, Là 1 tiện ích của javascript
```sh
npm install classnames --save
```
Sử dụng
```js
var joinClass = require('classnames');
```

<br><br>
Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Ứng dụng fullStack kết nối API

### Connect PostgreSql
- Bước 1: cài đặt express
```sh
express name_server -e
```
- Bước 2: Trên `name_server` vừa được tạo ra
```sh
npm install
```
- Bước 3: Tiếp tục cài đặt postgreSql
```sh
npm install pg
```
- Bước 4:
Trong `name_server` vào `routes` -> `index.js` dán code connect vào
```js
const express = require('express');
var router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})

pool.get('/', function (req, res) {
  res.send(res.rows)
})
```
### Xử lý lỗi CORS POLICY
- Trong **Client** (Reactjs) vào file `package.json` sau đó thêm cái dưới vào trong đó `http://localhost:X000` là link của **Server** (Nodejs)<br>
`"proxy": "http://localhost:X000"`
- Trong **Server** (Nodejs) trước khi get data thêm đoạn code sau vào để xử lý lỗi<br>
Trong đó `http://localhost:Y000` là link của **Client** (React js)

```js
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:Y000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
```

## Available Scripts

In the project directory, you can run:

```sh
npm start
```

## Các page
http://localhost:3000/login <br/>
http://localhost:3000/signup <br/>
http://localhost:3000/admin <br/>
http://localhost:3000/admin/task-board <br/>
