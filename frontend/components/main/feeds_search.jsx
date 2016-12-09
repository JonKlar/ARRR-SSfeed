import React from 'react';

class FeedsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {queryString: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleInput(e) {
    this.setState({queryString: e.currentTarget.value});
    this.props.searchFeeds(this.state.queryString);
  }

  handleSubscribe(feed) {
    this.props.setSelectedFeed(feed);
    this.props.router.push('/addfeed');
  }

  render() {
    if (this.state.queryString === "") {
      return(
        <div>
          <section className="search">
            <h4>Enter the publication, blog, news site, or RSS feed you'd like to follow</h4>
            <input className="search-bar"
              value={this.state.queryString}
              onInput={this.handleInput}
              placeholder="Search feeds"
              />
            <h1>So much cool stuff is gonna go here</h1>
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
        <button onClick={ () => this.handleSubscribe(feed) }>subscribe</button>
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
