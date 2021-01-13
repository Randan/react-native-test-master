import { connect } from 'react-redux';
import handleGetUsers from '../../redux/actions/users/handleGetUsers';
import handleRemoveUsers from '../../redux/actions/users/handleRemoveUsers';
import Home from './Home';

export default connect(
  (state) => ({
    usersPage: state.usersPage,
    usersList: state.usersList,
  }),
  {
    handleGetUsers,
    handleRemoveUsers,
  },
)(Home);
