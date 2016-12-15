import React from 'react';
import Collection from './collection';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    let pinned = true;
    if (localStorage.pinned === "false") {
      pinned = false;
    }

    this.state = {pinned: pinned};
    this.handleLogout = this.handleLogout.bind(this);
    this.pin = this.pin.bind(this);
    this.sendToFeeds = this.sendToFeeds.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleOpenToday = this.handleOpenToday.bind(this);
    this.handleOpenSaved = this.handleOpenSaved.bind(this);
  }

  handleLogout() {
    this.props.logout().then( () => {
      this.props.router.push('/login');
    }
  );}

  pin() {
    localStorage.pinned = !this.state.pinned;
    this.setState({ pinned: !this.state.pinned});
    }

  sendToFeeds(e) {
    this.props.router.push('/feeds');
  }

  handleClickAll(e) {
    this.props.router.push('/all');
  }

  handleOpenToday() {
    this.props.router.push('/');
  }

  handleOpenSaved() {
    this.props.router.push('/saved_view');
  }


  render() {
    let pinStatus = "pinned";
    let pinButtonText = "unpin";
    if (this.state.pinned === false){
      pinStatus = "unpinned";
      pinButtonText = "pin";
    }
    let username = "";
    let collections = "";
    if (this.props.currentUser){
      username = this.props.currentUser.username;

      collections = this.props.currentUser.collections.map( (collection) => (
        <li key={ collection.id }>
          <Collection collection={collection} router={this.props.router}/>
        </li>
      ));
    }



    return(
      <div className={`${pinStatus}` + "-body"}>
        <sidebar className={`sidebar ${pinStatus}`}>
          <span className="sidebar-main">
            <button className="pinner" onClick={ this.pin }>{ pinButtonText }</button>
            <img src="http://whatsupnewp.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png"
              className="menu-icon"/>
            <div className="saved-link" onClick={this.handleOpenSaved}>Saved for later
              <div className="saved-counter">{this.props.currentUser.savedArticles.length}
              </div>
            </div>
            <div className="today-link"
              onClick={this.handleOpenToday}>
              Today
            </div>
            <div className="add-feed" onClick={ this.sendToFeeds }> + </div>
            <ul className="feeds-holder">
              <h2 className="personal-feeds">COLLECTIONS</h2>
              <button className="collections-page"></button>
              <li className="text-all"
                onClick={this.handleClickAll}>
                <div className="burger-menu">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                All
              </li>
              {collections}
              {this.children}
            </ul>
          </span>
          <footer className="sidebar-footer">
            <div className="username">{username}
              <button onClick={this.handleLogout}>logout</button>
            </div>
          </footer>
        </sidebar>
        {this.props.children}
        <banner className="top-line">
          <img src='http://www.zdnet.com/i/story/61/44/001492/pirateship.png' className="logo"/>
        </banner>
    </div>
    );
  }
}

export default Sidebar;
