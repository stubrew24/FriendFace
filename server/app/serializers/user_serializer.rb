class UserSerializer < ActiveModel::Serializer
  attributes :id, :f_name, :l_name, :image, :tagline, :location, :email, :created_at, :updated_at, :posts
end
