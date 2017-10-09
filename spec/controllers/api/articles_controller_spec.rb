require "rails_helper"

RSpec.describe API::ArticlesController do
  include ActiveSupport::Testing::TimeHelpers
  let!(:articles) { create_list(:article, 5) }
  let(:parsed_json) { JSON.parse(response.body) }

  describe 'GET /api/articles' do
    it 'returns the list of articles' do
      get :index
      pp parsed_json
      # print response.body
    end
  end

  describe 'GET /api/articles/1' do

    it 'should return article with id 1' do
      get :show, params: { id: articles.first.id }
      expect(parsed_json).to include(articles.first.attributes)
    end
  end

  describe 'POST /api/articles' do
    let(:article_params) do
      { title: 'Some Title', body: 'the article body' }
    end

    let(:nowish) { Time.zone.now }

    it 'creates an article' do
      travel_to nowish do
        post :create, params: { article: article_params }
        expect(Article.where(article_params)).to exist
      end
    end
  end
end
