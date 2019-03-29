class PostSerializer < ActiveModel::Serializer
  attributes :id, :comment, :like_count, :created_at, :updated_at, :image, :user
end
