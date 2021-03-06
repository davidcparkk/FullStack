import React from 'react';
import { withRouter } from 'react-router-dom';

class FeedsForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      feed_title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const feed = Object.assign({}, this.state);
    this.props.action(feed).then(this.props.closeModal).then(() => this.props.history.push('/sources'));
  }

  render () {
    return (
      <div>
        <div onClick={this.props.closeModal} className='close-x'>X</div>
        <div className='create-new-feed-container'>
          <h1 className = 'news-feed-header'>Create New Feed</h1>
          <h3 className='news-feed-description'>A private collection of trusted sources, keyword alerts, or twitter feeds you want to read</h3>
          <form onSubmit={this.handleSubmit} className='create-feed-form'>
              <div className="feed-input-container">
                <label>
                  <div className="feed-input-title">
                    Title
                    <span className='required-tag'>Required</span>
                  </div>
                  <input  className='create-feed-input'
                    type="text"
                    value={this.state.feed_title}
                    onChange={this.update('feed_title')} placeholder="Title" />
                </label>
              </div>
              <input type="submit" value="CREATE" className="create-feed-button" />
              <button className="create-feed-cancel" onClick={this.props.closeModal}>CANCEL</button>
            
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedsForm);