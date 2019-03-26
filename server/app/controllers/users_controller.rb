class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user
    end

    def login
        @user = User.find_by(email: params[:email])
        if @user
            render json: @user
        else
            render json: {error: "User not found."}, status: 400
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            # binding.pry
            render json: @user.errors.full_messages, status: 400
        end
    end

    private 

    def user_params
        params.permit(:f_name,:l_name,:image,:tagline,:location,:email)
    end

end
