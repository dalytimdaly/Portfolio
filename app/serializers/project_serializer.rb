class ProjectSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :description, :name, :project_length, :image_urls, :url
 

end