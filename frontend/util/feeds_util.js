
const FeedsAPIUtil = {
  getArticles(feed) {

    return ($.ajax({
      type: "GET",
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(`${feed.url}`),
      dataType: 'json',
      error: function(){
        alert('Unable to load feed, Incorrect path or invalid feed');
      },
      success: function(xml){
        let values = xml.responseData.feed.entries;
        console.log(values);
      }
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
