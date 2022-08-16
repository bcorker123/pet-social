class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :species, :image_url
end
