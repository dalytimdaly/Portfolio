Rails.application.routes.draw do
  resources :users
  resources :projects
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
    
  get '/me', to:'users#showme'
  post '/signup', to: 'users#create'
  
  patch '/setavatar/:id', to: 'users#set_avatar'
  
  post '/addimage/:id', to: 'project#add_image'
  patch '/editimage/:id', to: 'project#edit_image'

end
