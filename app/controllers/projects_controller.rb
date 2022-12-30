class ProjectsController < ApplicationController
  before_action do
    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end

  before_action :set_project, only: %i[show destroy]

  def index
    render json: Project.all, include: [:images]
  end
  
  def show
    render json: @project
  end

  def create
    project = Project.create!(project_params)
    render json: project, status: :created
    
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render json: {}, status: :accepted
  end

  def update
    project = Project.find(params[:id])
    if project.update(images: params[:images])
      render json: project, status: :accepted
    else
      render json: { errors: project.errors.full_messages}, status: :unprocessable_entity
    end
  end

  


  private

  def project_params
    defaults = { images: [] }
    params.permit(:id, :name, :image, :project_length, :description, :attachment, :url, :image_urls, :images).reverse_merge(defaults)
  end

  def set_project
    @project = Project.find(params[:id])
  end


end
