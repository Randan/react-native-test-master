import actionTypes from '../../actions/actionTypes';

const initialState = null;

const usersCurrentPage = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersCurrentPage;
