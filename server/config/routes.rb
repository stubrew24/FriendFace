Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :show, :create, :destroy]

  post '/like', to: 'posts#add_like'
  post '/login', to: 'users#login'

end
