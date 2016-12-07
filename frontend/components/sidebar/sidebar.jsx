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



    let collections = this.props.currentUser.collections.map( (collection) => (
      <li key={ collection.id }>
        <Collection collection={collection}/>
      </li>
    ));


    return(
      <sidebar className={`sidebar ${pinStatus}`}>
        <button className="pinner" onClick={this.pin}>{ pinButtonText }</button>
        <img src="http://whatsupnewp.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png"
          className="menu-icon"/>
        <div className="saved-link">Saved for later</div>
        <div className="add-feed"> + </div>
        <ul className="feeds-holder">
          <h2 className="personal-feeds">COLLECTIONS</h2>
          <button className="collections-page"></button>
          <li className="text-all" >All</li>
          {collections}
          {this.children}
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
