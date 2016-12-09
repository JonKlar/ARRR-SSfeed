class Api::FeedsController < ApplicationController
  def search
    @feeds = Feed.where("description ~ ?", params[:query])
    render :search
  end

end
