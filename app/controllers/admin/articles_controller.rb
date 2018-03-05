class Admin::ArticlesController < ApplicationController
  layout 'admin'

  def index
    @articles = Article.all
  end

  def create
    Article.create!(article_params)
  end

  def show
    @article = Article.find(params.require(:id))
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :body)
  end
end
