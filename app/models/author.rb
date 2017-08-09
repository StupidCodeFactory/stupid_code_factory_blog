class Author < ApplicationRecord
  devise :trackable, :omniauthable, omniauth_providers: [:github]

  def self.from_omniauth(auth)
    find_by(provider: auth.provider, uid: auth.uid)
  end
end
