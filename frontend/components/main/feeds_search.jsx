import React from 'react';

class FeedsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {queryString: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.subscribed = this.subscribed.bind(this);
    this.handleTermSearch = this.handleTermSearch.bind(this);
  }

  handleInput(e) {
    this.setState({queryString: e.currentTarget.value});
    this.props.searchFeeds(this.state.queryString);
  }

  handleTermSearch(term) {
    this.setState({queryString: term});
    this.props.searchFeeds(term);
  }

  handleSubscribe(feed) {
    this.props.setSelectedFeed(feed);
    this.props.router.push('/addfeed');
  }

  subscribed(feed) {
    const collections = this.props.currentUser.collections;
    if (collections.length === 0) {
      return "";
    }

    for (let i = 0 ; i < collections.length ; i++) {
      if (collections[i].feeds.length === 0) {
        continue;
      } else {
        for (let j = 0 ; j < collections[i].feeds.length ; j++){
          if (collections[i].feeds[j].id === feed.id) {
            return "subscribed-to-feed";
          }
        }
      }
    }
    return "";
  }

  render() {
    if (this.state.queryString.length < 2) {
      let searchTerms = ["Technology", "Finance", "Movies", "News", "Politics", "Music", "Games", "Culture", "World News", "Video Games", "Startups", "Money", "Business"].map( (searchTerm) => {
        return (
          <li onClick={() => this.handleTermSearch(searchTerm)}
             className="search-term"
             key={searchTerm}
             >#{searchTerm}</li>
        );
      });
      return(
        <div>
          <section className="search">
            <h4>Enter the publication, blog, news site, or RSS feed you'd like to follow</h4>
            <input className="search-bar"
              value={this.state.queryString}
              onInput={this.handleInput}
              placeholder="Search feeds"
              />
            <h1 className="suggested-search">Suggested Search Terms</h1>
            <ul>{searchTerms}</ul>
          </section>
          { this.props.children }
        </div>
      );
    }

    let feeds = this.props.feeds.map( (feed) => (
      <li className= "search-feed" key = {feed.id}>
        <img src={`http://www.google.com/s2/favicons?domain_url=${feed.link}`}
          className="favicon-large"
          />
        <h5>{feed.title}</h5>
        <p>{feed.description}</p>
        <button onClick={ () => this.handleSubscribe(feed) } className={ this.subscribed(feed) }>subscribe</button>
      </li>
    ));

    if (feeds.length === 0 ) {
      feeds = "no feeds match search";
    }

    return(
      <div>
        <section className="search">
          <h4>Enter the publication, blog, news site, or RSS feed you'd like to follow</h4>
          <input className="search-bar"
            value={this.state.queryString}
            onInput={this.handleInput}
            placeholder="Search feeds"
            />
          <ul> { feeds }</ul>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default FeedsSearch;
