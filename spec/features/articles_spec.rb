require 'rails_helper'

RSpec.feature "Articles", type: :feature do

  let!(:articles) { create_list(:article, 5) }

  it 'displays the last 4 articles' do
    visit articles_path
    articles.each do |article|
      expect(page).to have_css('h3', text: article.title)
      expect(page).to have_css('p', text: article.body)
    end

  end
end
