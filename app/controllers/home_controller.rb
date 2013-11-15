class HomeController < ApplicationController
  def index
    @users = User.all

    respond_to do |format|
      format.html{}
      format.json{ render json: @users }
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update_attribute('name', params[:home][:name])

    respond_to do |format|
      format.html{}
      format.json{ render json: @user }
    end
  end
end
