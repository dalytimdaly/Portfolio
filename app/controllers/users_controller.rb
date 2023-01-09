class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: :create
  
    def index
      render json: User.all
    end
  
    def show
      user = User.find(params[:id])
      render json: user, status: :ok
    end
  
    # GET /me
    def showme
      render json: @current_user
    end
  
    # POST /users - SIGNUP
    def create
      user = User.create!(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def set_avatar
        user = User.find(params[:id])
        user.update(avatar: params[:avatar])
        render json: user, status: :accepted
    end
  
    # PATCH /user - EDIT ACCOUNT INFO
    def update
      user = User.find(params[:id])
      if user.update(user_params)
        render json: user, status: :accepted
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      user = User.find(params[:id])
      user.destroy
      render json: {}, status: :accepted
    end
  
    private
  
    def user_params
      params.permit(:id, :user, :username, :avatar, :password, :password_confirmation, :first_name, :last_name, :area, :phone_number, :bio)
    end
  
    
end
