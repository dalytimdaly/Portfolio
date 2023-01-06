Rails.application.routes.draw do
  resources :users
  resources :projects
  
  get '/hello', to: 'application#hello_world'
  
  get '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
    
  get '/me', to:'users#showme'
  post '/signup', to: 'users#create'
  
  patch '/setavatar/:id', to: 'users#set_avatar'
  
  patch '/projects_images/:id', to: 'projects#update_images'

  delete '/projects_images/:id', to: 'projects#destroy_image'


end
