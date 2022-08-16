Rails.application.routes.draw do
  scope '/api' do 
    resources :comments
    resources :ratings
    resources :pets
    resources :posts
    resources :users
  end

  get '*path', to: 'fallback#index', constraints: ->(req) {!req.xhr? && req.format.html? }
end
