require 'redcloth'
require 'github/markup'

class API::PreviewsController < ApplicationController
  protect_from_forgery with: :null_session
  layout 'false'

  def create
    render json: { article_preview: GitHub::Markup.render_s(GitHub::Markups::MARKUP_TEXTILE, preview_body_params[:body])}
  end

  private

  def preview_body_params
    params.require(:preview).permit(:body)
  end
end
