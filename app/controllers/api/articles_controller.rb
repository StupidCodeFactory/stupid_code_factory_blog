class API::ArticlesController < ApplicationController
  protect_from_forgery with: :null_session
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

  def update
    article = Article.find(params[:id])
    article.update!(article_params)
    render json: article
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end

end
