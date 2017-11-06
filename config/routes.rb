Rails.application.routes.draw do


  resources :articles, only: [:index, :show]

  namespace :api, format: :json do
    resources :articles, only: [:index, :show, :create, :update] do
      resource :preview, only: :create
    end
  end
  scope :admin do
    as :author do
      delete "/logout" => "devise/sessions#destroy"
    end

  end

  namespace :admin do
    devise_for :authors, controllers: { omniauth: 'admin/omniauth_callbacks' }

    resources :articles, only: [:index, :show, :new]
    root to: "articles#index"
  end

  authenticated do
    root to: "articles#index"
  end

  unauthenticated do
    root to: "articles#index"
  end

end
