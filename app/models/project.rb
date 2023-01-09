class Project < ApplicationRecord
  
  has_many_attached :images, dependent: :destroy
  belongs_to :user
  delegate :service_url, to: :blob

  def image_urls
    images.map { |image| Rails.application.routes.url_helpers.url_for(image) }
  end



end
