class Project < ApplicationRecord

  has_many_attached :images

  def image_urls
    images.map { |p| Rails.application.routes.url_helpers.url_for(p) }
  end


end
