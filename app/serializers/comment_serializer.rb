class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pet_id, :comment
end
