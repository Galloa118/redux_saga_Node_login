import { connect } from 'react-redux';
import App from '../components/App';

import { fetchGitUserBykeyword } from '../modules/actions';

export default connect(
  ({ app }) => ({ ...app }),
  (dispatch) => ({
    fetchGitUserBykeyword: (keyword) => dispatch(fetchGitUserBykeyword(keyword)),
  }),
)(App);
