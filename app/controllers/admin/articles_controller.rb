class Admin::ArticlesController < ApplicationController
  layout 'admin'

  def index
    @articles = Article.all
  end

  def new

  end

  def show
    @article = Article.find(params.require(:id))
  end
end
