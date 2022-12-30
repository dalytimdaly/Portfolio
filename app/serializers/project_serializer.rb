class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :project_length, 
  :image_urls, images: []


end