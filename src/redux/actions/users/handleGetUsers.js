import actionTypes from '../actionTypes';
import api from '../../../api';

export default (page) => async (dispatch) => {
  try {
    const resp = await api.getUsers(page);
    const users = resp.data;

    dispatch({
      type: actionTypes.GET_USERS,
      payload: users,
    });
    dispatch({
      type: actionTypes.EXTEND_USERS,
      payload: users.data,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_USERS,
      payload: null,
    });
  }
};
