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
      <form onSubmit={this.handleSubmit}>
        <label>username</label>
        <br/>
        <input className="username" onInput={this.handleUsernameInput} value={this.state.username}/>
        <br/>
        <label>password</label>
        <br/>
        <input className="password" type="password" onInput={this.handlePasswordInput} value={this.state.password}/>
        <br/>
        <button className="submit-button">{this.props.formType}</button>
        <br/>
        <Link className="other-form-link" to={this.props.otherURL}>{otherForm}</Link>
      </form>
    </div>
  );}

}

export default SessionForm;
