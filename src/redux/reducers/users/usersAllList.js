import actionTypes from '../../actions/actionTypes';

const initialState = [];

const usersAllList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXTEND_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default usersAllList;
