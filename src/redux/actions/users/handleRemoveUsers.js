import actionTypes from '../actionTypes';

export default () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_USERS,
    payload: null,
  });
  dispatch({
    type: actionTypes.EXTEND_USERS,
    payload: [],
  });
};
