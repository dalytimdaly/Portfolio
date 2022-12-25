class ProjectsController < ApplicationController

  def index
    render json: Project.all
  end
  
  def show
    project = Project.find(params[:id])
    render json: project, status: :accepted
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
    if project.update(court_params)
      render json: project, status: :accepted
    else
      render json: { errors: project.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def edit_image
    project = Project.find(params[:id])
    project.update(params[:images])
    render json: project, status: :accepted
  end


  private

  def project_params
    defaults = { images: [] }
    params.permit(:id, :name, :project_length, :description, :images).reverse_merge(defaults)
  end


end
