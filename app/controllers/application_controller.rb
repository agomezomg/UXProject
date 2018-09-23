class ApplicationController < ActionController::Base
    include Knock::Authenticable
    protect_from_forgery unless: -> { request.format.json? }
end
