Rails.application.routes.draw do
  get 'pages/index'
  resources :users
	root 'pages#index'
	match '*path', to: 'pages#index', via: :all
end
