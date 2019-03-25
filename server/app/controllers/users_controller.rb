class UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        # binding.pry 
        render json: @user
    end

end
