class Api::FeedsController < ApplicationController
  def search
    @feeds = Feed.where("LOWER(description) ~ ?", params[:query].downcase)
    render :search
  end

end
