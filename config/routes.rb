Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :post_comments
  resources :likes
  resources :posts
  get 'pages/index'
  resources :users
	root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
