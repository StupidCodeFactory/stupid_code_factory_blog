class Admin::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def github
    author = Author.from_omniauth(request.env["omniauth.auth"])

    if author
      sign_in_and_redirect author, event: :authentication
      set_flash_message(:notice, :success, kind: 'Github') if is_navigational_format?
    else
      redirect_to root_path
    end
  end

end
