import * as types from './../constants/ui';

const initialState = {
  showLoading: false,
  openSideBar: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return {...state, showLoading: true,}
      case types.HIDE_LOADING:
        return {...state, showLoading: false,}
      case types.SHOW_SIDEBAR: {
        return {
          ...state,
          openSideBar: true,
        }
      }
      case types.HIDE_SIDEBAR: {
        return {
          ...state,
          openSideBar: false,
        }
      }
    default:
      return state
  }
}

export default uiReducer;