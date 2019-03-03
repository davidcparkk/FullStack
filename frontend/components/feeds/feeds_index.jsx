import React from 'react';
import FeedsIndexItem from './feeds_index_item';
import CreateFormContainer from './feeds_form_container';

class FeedsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }
  
  render() {

    let feeds = this.props.feeds.map(feed=> {
      return(
        <FeedsIndexItem 
        key={feed.id}
        feed={feed}
        />
      )
    })
    
    return(
      <div className="feedmeTabsHolder">
        <div className='margin-bottom'>
          <div className='pin-button'></div>
          <div className='today-button'>Today
          </div>
          <div className='separator'></div>
          <div className='personal-feed'>Personal Feeds
            <div className='tab'>All
              <div className='icon'></div>
            </div>
            <div className='tab'>Favorites
              <div className='icon'></div>
            </div>
            <ul>
              {feeds}
            </ul>
          </div>
          <div className='tab'>
          <CreateFormContainer />
          </div>
          <button className='add-content'>Add Content</button>
          
          
            
          
        </div>
      </div>
    )
  }
}

export default FeedsIndex;