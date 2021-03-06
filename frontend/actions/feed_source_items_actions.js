import * as feedSourceItemApiUtils from '../util/feed_source_item_api_util';
export const RECEIVE_FEED_SOURCE_ITEMS = "RECEIVE_FEED_SOURCE_ITEMS";
export const RECEIVE_FEED_SOURCE_ITEM = "RECEIVE_FEED_SOURCE_ITEM";
export const REMOVE_FEED_SOURCE_ITEM = "REMOVE_FEED_SOURCE_ITEM";
export const RECEIVE_FEED = "RECEIVE_FEED";

export const createFeedSourceItem = (feedSourceItem) => dispatch => {
  return feedSourceItemApiUtils.createFeedSourceItem(feedSourceItem).then( payload => dispatch(receiveFeed(payload)))
};

const receiveFeed = (payload) => {
  return({
    type: RECEIVE_FEED,
    payload: payload
  })
}

export const deleteFeedSourceItem = (feedId) => dispatch => {
  return feedSourceItemApiUtils.deleteFeedSourceItem(feedId).then( feed => dispatch(receiveFeed(feed)))
  };

const receiveFeedSourceItem = (feedSourceItem) => {
  return({
    type: RECEIVE_FEED_SOURCE_ITEM,
    feedSourceItem: feedSourceItem
  })
}

const receiveFeedSourceItems = (feedSourceItems) => {
  return({
    type: RECEIVE_FEED_SOURCE_ITEMS,
    feedSourceItems: feedSourceItems
  })
}

const removeFeedSourceItem = (feedSourceItemId) => {
  return({
    type: REMOVE_FEED_SOURCE_ITEM,
    feedSourceItemId: feedSourceItemId
  })
}

// export const fetchFeedSourceItems = () => dispatch => {
//   return feedSourceItemApiUtils.fetchFeedSourceItems().then( feedSources => dispatch(receiveFeedSourceItems(feedSources)))
// };
