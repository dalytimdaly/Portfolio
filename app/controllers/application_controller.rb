class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action do
    ActiveStorage::Current.url_options = { protocol: request.protocol, host: request.host, port: request.port }
  end

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
  
   private
  
  def authorize
      @current_user = User.find_by(id: session[:user_id])
        
      render json: { error: "This action is not authorized" }, status: :unauthorized unless @current_user
  end
  
  
  def render_not_found(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
  end
  
  def render_invalid(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
  end

  

end
