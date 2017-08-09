class Admin::ArticlesController < ApplicationController
  layout 'admin'

  def index
    @articles = Article.all
  end
end
