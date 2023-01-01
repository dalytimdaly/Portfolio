Rails.application.routes.draw do
  resources :users
  resources :projects
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  
  post '/login', to:'sessions#create'
  delete '/destroy', to: 'sessions#destroy'
    
  get '/me', to:'users#showme'
  post '/signup', to: 'users#create'
  
  patch '/setavatar/:id', to: 'users#set_avatar'
  
  patch '/projects_images/:id', to: 'projects#update_images'
 



end
