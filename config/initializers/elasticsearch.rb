require 'elasticsearch/rails/instrumentation/log_subscriber'

Elasticsearch::Model.client = Elasticsearch::Client.new host: ENV.fetch('ELASTIC_SEARCH_URL', 'elasticsearch:9200'), log: true
