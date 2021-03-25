Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get    '/restaurants'        => 'restaurants#index'
      get    '/restaurants/:id'      => 'restaurants#show'
      # resources :restaurants
    end
  end


  get "*path", to: "pages#index"
end