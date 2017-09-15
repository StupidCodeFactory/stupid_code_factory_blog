require 'elasticsearch/model'

class Article < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
  validates_presence_of :title, :body, :description

  # settings index: { number_of_shards: 3 } do
  #   mappings dynamic: 'false' do
  #     indexes :title, analyzer: 'english', index_options: 'offsets'
  #   end
  # end
end
