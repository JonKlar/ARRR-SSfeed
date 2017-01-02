import React from 'react';
import { connect } from 'react-redux';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.openLogin = this.openLogin.bind(this);
  }

  openLogin(){
    this.props.router.push("/login");
  }

  render() {

    return(
      <section className="splash">
        <h1 className="splash-welcome">Welcome to ARRR!SS-Feed!</h1>
        <h2 className="splash-blurb">Every feed you need to read at real-time speed</h2>
        <button className="splash-login"
          onClick={this.openLogin}>
          GET STARTED FOR FREE
        </button>
        <img className="splash-img" src='/Collection_View_Screenshot.png' type="image/png"/>
        {this.props.children}
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
