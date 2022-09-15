Rails.application.routes.draw do
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  scope '/api' do 
    resources :comments
    resources :ratings
    resources :pets
    resources :posts
    resources :users
  end

  get '*path', to: 'fallback#index', constraints: ->(req) {!req.xhr? && req.format.html? }
end
