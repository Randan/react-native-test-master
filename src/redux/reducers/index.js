import { combineReducers } from 'redux';
import usersCurrentPage from './users/usersCurrentPage';
import usersAllList from './users/usersAllList';

export default combineReducers({
  usersPage: usersCurrentPage,
  usersList: usersAllList,
});
