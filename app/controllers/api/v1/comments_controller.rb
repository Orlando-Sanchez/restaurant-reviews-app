module Api
  module V1
    class CommentsController < ApplicationController
      def create
        @comment = Comment.create(comment_params)
        render json: @comment
      end
      
      private

      def comment_params
        params.require(:comment).permit(:username, :text, :restaurant_id)
      end
    end
  end
end