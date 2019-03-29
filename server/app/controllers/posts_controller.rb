class PostsController < ApplicationController

    def index
        @posts = Post.all
        render json: @posts
    end

    def show
        @post = Post.find_by(id: params[:id])
        render json: @post
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        else
            render json: {error: "Post not saved."}, status: 400
        end
    end

    def add_like
        @post = Post.find_by(id: params[:id])
        @post.like_count += 1
        if @post.save
            render json: @post
        else 
            render json: {error: "Like not saved."}, status: 400
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post 
            @post.destroy
            render json: {message: "You deleted me"}
        else
            render json: {error: "Post not Found!"}, status: 404
        end
    end

    private

    def post_params
        params.permit(:comment, :like_count, :user_id, :image)
    end
end
