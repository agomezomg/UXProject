class Post < ApplicationRecord
    belongs_to :user, dependent:destroy
    has_many :likes
    has_many :post_comment
end
