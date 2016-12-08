class Api::CollectionsController < ApplicationController
  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
    current_user.collections = current_user.collections.push(@collection)
    @user = current_user
    render 'api/users/show'
  end

  def destroy
    @collection = Collection.find(params[:collection_id])
    @collection.destroy
    @user = current_user
    render 'api/users/show'
  end

  def add_feed
    @collection = Collection.find(params[:collection_id])
    @feed = Feed.find(params[:feed_id])
    if @collection && @feed
      @collection.feeds.push(@feed)
    else
    end
  end

  def remove_feed
    @collection = Collection.find(params[:collection_id])
    @feed = Feed.find(params[:feed_id])
    if @collection && @feed
      @collection.feeds.delete(@feed)
    else
    end
  end

  private

  def collection_params
    params.require(:collection).permit(:title)
  end
end
