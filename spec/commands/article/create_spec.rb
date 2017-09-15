require "rails_helper"

RSpec.describe Article::Create, type: :model do

  let(:article_params) { attributes_for(:article) }

  subject { described_class.new(article_params) }
  it 'creates an article' do
    expect {
      subject.execute
    }.to change { Article.count }.by(1)
  end

  it 'has indexed the document' do
    subject.execute
    pp [Article.count]
    Article.import
    q = Article.first.title.split.first
    Article.__elasticsearch__.search(q).results.each do |result|
      pp result
    end
  end
end
