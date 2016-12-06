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
  }

  handleUsernameInput(e) {
    this.setState({username: e.currentTarget.value});
  }

  handlePasswordInput(e) {
    this.setState({password: e.currentTarget.value});
  }

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

  render() {
    const otherForm = this.props.formType === 'login' ? 'signup' : 'login';
    // const errors = this.props.errors;
    // <h2>{errors}</h2>
    return (
    <div className="session-form">
      <h1>Login to ARRR!SSfeed</h1>
      <form onSubmit={this.handleSubmit}>
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
        <button className="submit-button">{this.props.formType}</button>
        </div>
        <br/>
        <Link className="other-form-link" to={this.props.otherURL}>{otherForm}</Link>
      </form>
    </div>
  );}

}

export default SessionForm;
