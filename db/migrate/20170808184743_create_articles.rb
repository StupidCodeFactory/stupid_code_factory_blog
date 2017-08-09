class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'pgcrypto'
    create_table :articles, id: :uuid do |t|
      t.string :title,      null: false
      t.text :body,         null: false, default: ''
      t.boolean :published, null: false, default: false

      t.timestamps
    end
  end
end
