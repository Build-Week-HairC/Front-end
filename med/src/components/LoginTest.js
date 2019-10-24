import React from 'react';
import axios from 'axios';
import Auth from './utils/Auth';
import styled from "styled-components";

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

    const LoginWrapper = styled.div`
      .login {
        display: flex;
        flex-direction: column;
        align-items: center;
      

        .text {
          // display: flex;
          margin: 10px;
        }

        .button {
          // display: flex;
          align-items: center;
          margin: 10px;
        }
      }

    `;

    return (
      <LoginWrapper>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <input className="text"
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
            <button className="button" type='submit' onClick={() => Auth.login()}>Login</button>
          </form>
        </div>
      </LoginWrapper>
    );
  }
}

export default LoginTest;