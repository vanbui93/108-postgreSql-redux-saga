//Đây là file tổng hợp gọi api
import axiosService from './../commons/axiosService';   //res trả về
import { API_ENDPOINT } from './../constants/index';    //locahost
import qs from 'query-string';

//http://localhost:3000/tasks
const url = 'tasks';

export const getListTask = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {               //Nếu params có key
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);  //ở đây gọi hàm get
}
//http://localhost:3000/tasks   METHOD: POST
export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}

//http://localhost:3000/tasks/:id   METHOD: PUT
export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
}

//http://localhost:3000/tasks/:id   METHOD: DELETE
export const deleteTask = (taskId) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
}
