# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
guest = User.create!(username: "guest", password: "guesterino")

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

buzzfeed = Feed.create!({
    url: "https://www.buzzfeed.com/index.xml",
    title: "Buzzfeed",
    link: "https://www.buzzfeed.com",
    description: "BuzzFeed is the leading independent digital media company delivering news and entertainment to hundreds of millions of people around the world."
})

#uses feed burner
techcrunch = Feed.create!({
    url: "http://feeds.feedburner.com/TechCrunch/",
    title: "TechCrunch",
    link: "https://techcrunch.com",
    description: "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news."
})

#uses feed burner
vulture = Feed.create!({
    url: "http://feeds.feedburner.com/nymag/vulture",
    title: "Vulture",
    link: "http://www.vulture.com/",
    description: "Vulture provides continuous entertainment news, covering TV, movies, music, art, books, theater, celebrities and the entertainment industry."
})

vox = Feed.create!({
    url: "http://www.vox.com/rss/index.xml",
    title: "Vox",
    link: "http://www.vox.com/",
    description: "Vox is a general interest news site for the 21st century. Its mission is simple: Explain the news. Politics, public policy, world affairs, pop culture, science, business, etc."
})

politico = Feed.create!({
    url: "http://www.politico.com/rss/politics08.xml",
    title: "Politico",
    link: "http://www.politico.com/",
    description: "Political news about campaigns, Congress, lobbyists and issues."
})

av_club = Feed.create!({
    url: "http://www.avclub.com/feeds/rss/",
    title: "The A.V. Club",
    link: "http://www.avclub.com/",
    description: "Pop culture obsessives writing for the pop culture obsessed."
})

pitchfork = Feed.create!({
    url: "http://pitchfork.com/rss/news/",
    title: "Pitchfork",
    link: "http://www.pitchfork.com/",
    description: "The most trusted voice in music"
})

brooklyn_vegan = Feed.create!({
    url: "http://www.brooklynvegan.com/index.xml",
    title: "Brooklyn Vegan",
    link: "http://www.brooklynvegan.com/",
    description: "Founded in 2004, BrooklynVegan is an independent, NYC-centric, mostly-music blog that focuses on international music news, live show reviews, pictures, tour dates, gossip, tips, MP3’s, streams, videos, and much more."
})

wired = Feed.create!({
    url: "https://www.wired.com/feed/",
    title: "Wired",
    link: "https://www.wired.com/",
    description: "In-depth coverage of current and future trends in technology, and how they are shaping business, entertainment, communications, science, politics, and culture."
})

espn = Feed.create!({
    url: "http://www.espn.com/espn/rss/news",
    title: "ESPN",
    link: "http://www.espn.com/",
    description: "Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more."
})

gothamist = Feed.create!({
    url: "http://feeds.gothamistllc.com/gothamist05",
    title: "Gothamist",
    link: "http://www.gothamist.com/",
    description: "A daily weblog covering New York City's personalities, news stories, and media with humorous photos and running commentary."
})

the_atlantic = Feed.create!({
    url: "http://www.theatlantic.com/feed/all/",
    title: "The Atlantic",
    link: "https://www.theatlantic.com/",
    description: "The Atlantic covers news and analysis on politics, business, culture, technology, national, international and life on the official site of The Atlantic Magazine."
})
