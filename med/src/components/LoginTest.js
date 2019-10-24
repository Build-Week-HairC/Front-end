import React from 'react';
import axios from 'axios';
import Auth from './utils/Auth';

class LoginTest extends React.Component {
  state = {
      username: '',
      password: ''
  };

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('https://medcabinet.herokuapp.com/login', 
      `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {
        headers: {
          Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => { 
        console.log(res.data)
        localStorage.setItem("token", res.data.access_token);
        this.props.history.push("/medcard");
      })
      .catch(err => console.log('Token not return', err))
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <input
        type='text'
        name='username'
        value={this.state.username}
        onChange={this.handleChange}
        placeholder='Username'
      />
      <input
        type='text'
        name='password'
        value={this.state.password}
        onChange={this.handleChange}
        placeholder='Password'
      />
      <button type='submit' onClick={() => Auth.login()}>Login</button>
    </form>
      </>
    )
  }
}

export default LoginTest;