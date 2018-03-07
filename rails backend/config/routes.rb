Rails.application.routes.draw do
	mount_devise_token_auth_for 'User', at: 'auth'
	resources :posts do
		get 'search', on: :collection#this is for the search method
	end  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end