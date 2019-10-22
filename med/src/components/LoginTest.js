import React from 'react';
import { axiosWithAuth } from './utils/AxiosWithAuth';

class LoginTest extends React.Component {
  state = {
      username: '',
      password: ''
  };

  handleChange = e => {
    this.setState({
 
        ...this.state,
        [e.target.name]: e.target.value

    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('https://medcabinet.herokuapp.com/login', 
      `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {
        headers: {
          Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => console.log(res.data))
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
      <button type='submit'>Login</button>
    </form>
      </>
    )
  }
}

export default LoginTest;