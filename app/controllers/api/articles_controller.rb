class Api::ArticlesController < ApplicationController

  def index
    articles = Article.all
    render json: articles
  end

  def show
    article = Article.find(params[:id])
    render json: article
  end

  def create
    Article.create!(article_params)
    head :ok
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end

end
