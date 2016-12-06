class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: {errors: "invalid credentials"}, status: 404
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: nil
    else
      render json: {}, status: 404
    end
  end

end
