# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
guest = User.create!(username: guest, password: guesterino)

Collection.destroy_all
Collection.create!(
  title: "Test Collection",
  user_id: guest.id
)

Collection.create!(
  title: "Other Test Collection",
  user_id: guest.id
)

Feed.destroy_all
the_verge = Feed.create!({
  url: "http://www.theverge.com/rss/index.xml",
  title: "The Verge",
  link: "http://www.theverge.com/",
  description: "The Verge was founded in 2011 in partnership with Vox Media, and covers the intersection of technology, science, art, and culture.",
  })

engadget = Feed.create!({
  url: "https://www.engadget.com/rss.xml",
  title: "Engadget",
  link: "https://www.engadget.com/",
  description: "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics",
})

the_economist = Feed.create!({
  title: "The Economist",
  url: "http://www.economist.com/sections/economics/rss.xml",
  link: "http://www.economist.com/",
  description: "The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them."
  })

npr = Feed.create!({
  title: "Planet Money",
  url: "http://www.npr.org/rss/podcast.php?id=510289",
  link: "http://www.npr.org/podcasts/510289/planet-money",
  description: "The economy, explained, with stories and surprises. Imagine you could call up a friend and say, \"Meet me at the bar and tell me what\'s going on with the economy.\" Now imagine that\'s actually a fun evening. That\'s what we\'re going for at Planet Money. People seem to like it."
  })
