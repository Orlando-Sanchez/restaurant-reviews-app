module Api
  module V1
    class RestaurantsController < ApplicationController

      def index
        @restaurants = Restaurant.all 
        render json: @restaurants
      end
      
      def show
        @restaurant = Restaurant.where('id = ?', params[:id]).first
        respond_to do |format|
          format.json  { render json: @restaurant.to_json(include: [:comments])}
        end
      end

      private

      def restaurant_params
        params.require(:restaurant).permit(:name, :description)
      end
    end
  end
end