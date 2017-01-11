
const FeedsAPIUtil = {
  getArticles(feed) {
    return ($.ajax({
      type: "GET",
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22" + encodeURIComponent(`${feed.url}`) + "%22&format=json&diagnostics=true&callback=" ,
      dataType: 'json'
    }));
  },

  searchFeeds(queryVal) {
    return ($.ajax({
      url: `/api/feeds/search?query=${queryVal}`,
      method: "GET",
    }));
  }

};

export default FeedsAPIUtil;


// grab favicons
// http://www.google.com/s2/favicons?domain_url=http://www.theverge.com/
// {url}/favicon.ico

// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.avclub.com%2Ffeeds%2Frss%2F%22&format=json&diagnostics=true&callback=
// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22http%3A%2F%2Fwww.avclub.com%2Ffeeds%2Frss%2F%27&format=json&diagnostics=true&callback=
