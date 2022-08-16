class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pet_id, :rating
end
