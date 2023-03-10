class UserSerializer < ActiveModel::Serializer
  attributes :id, :avatar, :username, :password_digest, :first_name, :last_name, :area, :phone_number, :bio

  def avatar
    object.avatar_url
  end

end
