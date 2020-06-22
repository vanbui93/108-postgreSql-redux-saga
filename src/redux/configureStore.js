import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../saga/index';// là nơi điều phối các saga, theo dõi và kích hoạt xử lý action

//Đây là store
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares =[thunk];
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares,sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};



export default configureStore;

