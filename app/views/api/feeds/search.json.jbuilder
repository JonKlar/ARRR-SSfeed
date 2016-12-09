json.array! @feeds do |feed|
  json.id feed.id
  json.title feed.title
  json.url feed.url
  json.link feed.link
  json.description feed.description
end
