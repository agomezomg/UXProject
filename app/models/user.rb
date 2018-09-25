class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :likes
    has_many :post_comments
    validates :password, length: { in: 6..20 }
end
