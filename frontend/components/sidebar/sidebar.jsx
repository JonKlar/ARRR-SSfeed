import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pinned: true};
    this.handleLogout = this.handleLogout.bind(this);
    this.pin = this.pin.bind(this);
  }

  handleLogout() {
    this.props.logout().then( () => {
      this.props.router.push('/login');
    }
  );}

  pin() {
    this.setState({pinned: !this.state.pinned});
    }




  render() {
    let pinStatus = "pinned";
    let pinButtonText = "unpin";
    if (this.state.pinned === false){
      pinStatus = "unpinned";
      pinButtonText = "pin";
    }
    let username = "";
    if (this.props.currentUser){
      username = this.props.currentUser.username;
    }
    return(
      <sidebar className={`sidebar ${pinStatus}`}>
        <button className="pinner" onClick={this.pin}>{ pinButtonText }</button>
        <img src="http://whatsupnewp.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png"
          className="menu-icon"/>
        <div className="saved-link">Saved for later</div>
        <div className="add-feed"> + </div>
        <ul className="feeds-holder">
          <h2 className="personal-feeds">PERSONAL FEEDS</h2>
          <li>All</li>
          <li>
            <ul className="feeds">
              <li>Feed 1</li>
              <li>Feed 2</li>
            </ul>
          </li>
        </ul>
        <footer className="sidebar-footer">
          <div className="username">{username}
            <button onClick={this.handleLogout}>logout</button>
          </div>
        </footer>
      </sidebar>
    );
  }
}

export default Sidebar;
