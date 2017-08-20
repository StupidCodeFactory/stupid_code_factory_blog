require 'github/markup'

class API::PreviewsController < ApplicationController

  layout 'false'

  def show
    render json: { article_preview: GitHub::Markup.render(params.require(:article_preview))}
  end
end
