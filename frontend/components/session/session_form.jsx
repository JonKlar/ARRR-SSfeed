import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  handleUsernameInput(e) {
    this.setState({username: e.currentTarget.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.currentTarget.value});
  }

  componentWillReceiveProps(newProps){
    if (newProps.formType !== this.props.formType) {
    this.props.clearErrors();
  }}

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({
      username: this.state.username,
      password: this.state.password
    }).then( () => {
      this.props.router.push('/');
    },
    () => {
      this.setState({
        password: ""
      });
    });
  }

  loginGuest(e) {
    e.preventDefault();
    this.props.processForm({
      username: "guest",
      password: "guesterino"
    }).then( () => {
      this.props.router.push('/');
    });
  }

  render() {
    let banner = "Login to ARRR!SSfeed";
    if (this.props.formType === 'Sign Up') {
      banner = 'Create New User';
    }
    const otherForm = this.props.formType === 'Login' ? 'New user? Sign Up' : 'Already a user? Login';
    const errors = this.props.errors.map( (error, idx) => (
      <li key={ idx }>{error}</li>
    ));

    let buttons = (
      <button className="submit-button" onClick={this.handleSubmit}>{this.props.formType}</button>
    );

    if (this.props.formType === 'Login') {
      buttons = (
        <div>
          <button className="submit-button" onClick={this.handleSubmit}>{this.props.formType}</button>
          <button className="guest-login" onClick={this.loginGuest}>Login as Guest</button>
        </div>
      );
    }

    return (
    <div className="session-form">
      <h1>{banner}</h1>
      <form >
        <ul className="db-errors">{ errors }</ul>
        <input
          className="username"
          onInput={this.handleUsernameInput}
          placeholder="username"
          value={this.state.username}/>
        <input
          className="password"
          type="password"
          onInput={this.handlePasswordInput}
          placeholder="password"
          value={this.state.password}/>
        <br/>
        <div className="submit-wrapper">
        { buttons }
        </div>
        <br/>
        <Link className="other-form-link" to={this.props.otherURL}>{otherForm}</Link>
      </form>
    </div>
  );}

}

export default SessionForm;
