class AddOmniauthToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :authors, :provider, :string
    add_column :authors, :uid, :string
  end
end
