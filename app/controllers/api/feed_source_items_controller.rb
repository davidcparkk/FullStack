class Api::FeedSourceItemsController < ApplicationController
  before_action :require_login
  def index
    @feed_source_items = FeedSourceItem.all
  end
  
  def create
    @feed_source_item = FeedSourceItem.new(feed_source_item_params)
    if @feed_source_item.save
      @feed = @feed_source_item.feed
      render 'api/feeds/show'
    else
      render json: @feed_source_item.errors.full_messages, status: 400
    end
    
  end

  def destroy
    @feed_source_item = FeedSourceItem.find(params[:id])
    @feed = @feed_source_item.feed
    @feed_source_item.destroy
    render 'api/feeds/show'
  end

  def feed_source_item_params
    params.require(:feedSourceItem).permit(:feed_id, :source_id)
  end
end
