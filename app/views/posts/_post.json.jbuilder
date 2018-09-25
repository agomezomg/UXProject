json.extract! post, :id, :created_at, :updated_at, :title, :description, :theme, :photourl
json.url post_url(post, format: :json)
