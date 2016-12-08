json.id user.id
json.username user.username
json.collections do
  json.array! user.collections do |collection|
    json.id collection.id
    json.title collection.title
    json.feeds collection.feeds
  end
end
