class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id
  has_one :user
end
#the user_id is VERRRRRRRRRRrYYYYYYYYYYYYYY IMportant, You must serialize it, for the create method to work