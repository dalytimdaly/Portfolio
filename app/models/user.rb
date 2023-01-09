class User < ApplicationRecord
  has_secure_password
  has_many :projects
  has_one_attached :avatar, dependent: :destroy
  validates :username, uniqueness: true
  

  def avatar_url
    return Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
  end

end
