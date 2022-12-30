class Project < ApplicationRecord

  has_many_attached :images
  delegate :service_url, to: :blob

  def image_urls
    images.map { |image| Rails.application.routes.url_helpers.url_for(image) }
  end

end
