class UserTokenController < Knock::AuthTokenController
    protect_from_forgery unless: -> { request.format.json? }
end
