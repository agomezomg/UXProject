class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :likes
    validates :password, length: { in: 6..20 }
end
