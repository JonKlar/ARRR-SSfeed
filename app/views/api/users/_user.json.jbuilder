json.id user.id
json.username user.username
json.collections do
  json.array! user.collections do |collection|
    json.id collection.id
    json.title collection.title
    json.feeds collection.feeds
  end
end
json.savedArticles do
  json.array! user.articles do |article|
    json.id article.id
    json.title article.title
    json.description article.content
    json.link article.link
    json.author article.author
    json.pubDate article.publishedDate
  end
end
