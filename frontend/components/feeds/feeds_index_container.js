import {connect} from 'react-redux';
import {fetchFeeds, deleteFeed} from '../../actions/feed_actions';
import FeedsIndex from './feeds_index';
import {selectFeed} from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  
  
  let feeds_values = Object.values(state.entities.feeds);
  
  let currentUserId = parseInt(state.session.id);
  const currentUserFeeds = selectFeed(feeds_values, currentUserId);

 
  return {
    feeds: currentUserFeeds,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFeeds: () => dispatch(fetchFeeds()),
    deleteFeed: (feedId) => dispatch(deleteFeed(feedId)),
    openModal: (type) => dispatch(openModal(type))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedsIndex);