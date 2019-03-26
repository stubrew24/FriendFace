class User < ApplicationRecord
<<<<<<< HEAD
    validates :email, uniqueness: true
=======
    has_many :posts
>>>>>>> f944e6cc7bb4be63ede4de499077a4a6886e798c
end
