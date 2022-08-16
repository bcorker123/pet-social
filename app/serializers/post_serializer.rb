class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_text, :image_url
end
