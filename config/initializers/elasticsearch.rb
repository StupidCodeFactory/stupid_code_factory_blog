require 'elasticsearch/rails/instrumentation/log_subscriber'

Elasticsearch::Model.client = Elasticsearch::Client.new host: 'elasticsearch:9200', log: true
