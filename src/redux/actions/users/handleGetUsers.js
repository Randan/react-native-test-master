import actionTypes from '../actionTypes';
import api from '../../../api';

export default (page) => async (dispatch) => {
  try {
    const resp = await api.getUsers(page);

    if (resp.status >= 200 && resp.status <= 301) {
      const users = resp.data;

      dispatch({
        type: actionTypes.GET_USERS,
        payload: users,
      });
      dispatch({
        type: actionTypes.EXTEND_USERS,
        payload: users.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_USERS,
        payload: null,
      });
    }
  } catch (e) {
    dispatch({
      type: actionTypes.GET_USERS,
      payload: null,
    });
  }
};
