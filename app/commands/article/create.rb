class Article < ApplicationRecord
  class Create
    def initialize(article_params)
      self.article_params = article_params
    end

    def execute
      article.save!
    end

    private

    attr_accessor :article_params

    def article
      @article ||= Article.new(article_params)
    end
  end
end
