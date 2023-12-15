Rails.application.routes.draw do
 root 'root#index'
  get "up" => "rails/health#show", as: :rails_health_check
  namespace :api, default: {format: :json} do
  namespace  :v1 do
    resources :messages, only:[:index] 
    end
  end
end
