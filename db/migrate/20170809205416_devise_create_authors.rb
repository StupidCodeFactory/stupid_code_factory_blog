class DeviseCreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors, id: :uuid do |t|
      t.string :email, null: false

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet     :current_sign_in_ip
      t.inet     :last_sign_in_ip
      t.timestamps null: false
    end

    add_index :authors, :email,                unique: true
  end
end
