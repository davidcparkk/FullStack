import {connect} from 'react-redux';
import ModalFeedsIndexItem from './modal_feeds_index_item';
import {selectFeed} from '../../reducers/selectors';
import {createFeedSourceItem, deleteFeedSourceItem} from '../../actions/feed_source_items_actions';


const mapDispatchToProps = dispatch => {
  return{
    createFeedSourceItem: (feedSourceItem) => dispatch(createFeedSourceItem(feedSourceItem)),deleteFeedSourceItem: (feedSourceItemId) => dispatch(deleteFeedSourceItem(feedSourceItemId))
  };
}

export default connect(null,mapDispatchToProps)(ModalFeedsIndexItem);