class Api::CollectionsController < ApplicationController
  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = currentUser.id
    if @collection.valid?
      currentUser.collections = currentUser.collections.push(@collection)
      render 'api/users/show'
    else
      render json: {errors: @collection.errors.full_messages}, status: 422
  end

  def destroy
    @collection = Collection.find(params[:collection_id])
    @collection.destroy
    render 'api/users/show'
  end

  def update
  end

  private

  def collection_params
    params.require(:collection).permit(:title)
  end
end
