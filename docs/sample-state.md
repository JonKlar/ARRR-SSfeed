```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCollection: {errors: ["body can't be blank"]}
    addFeed: {errors: []}
  },
  collections: {
    1: {
      title: "News",
      description: "world news!",
      feeds{
        1: {
          title: "New York Times > World News",
          url: "nyt.com",
          link: "nyt.com/news.html",
          description: "world news from the NYT",
          author: "nyt",
          articles:
          {
            title: "Trump is president",
            content: "Today the world was shocked in horror as....",
            contentSnippet: "Today the world was....",
            author: "Jon Newsman",
            publishedDate: "June 1, 2016",
            read: false,
          }
        }
      }
    }
  },
  
