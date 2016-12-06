import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then( () => {
      this.props.router.push('/login');
    }
  );}


  render() {
    return(
      <sidebar className="sidebar">
        <h1>welcome to ARRR!SSfeed</h1>
        <button onClick={this.handleLogout}>logout</button>
      </sidebar>
    );
  }
}

export default Sidebar;
