$.ajax({
  type: "GET",
  url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent('http://rss.nytimes.com/services/xml/rss/nyt/US.xml'),
  dataType: 'json',
  error: function(){
      alert('Unable to load feed, Incorrect path or invalid feed');
  },
  success: function(xml){
      let values = xml.responseData.feed.entries;
      console.log(values);
  }
});

// grab favicons
// http://www.google.com/s2/favicons?domain_url={url}
// {url}/favicon.ico
