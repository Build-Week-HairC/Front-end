import React from 'react';
import axios from 'axios';
import Auth from './utils/Auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 150px;
`

const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin: 100px auto 0 35px;
`

const CustomButton = styled.button`
  background-color: green;
`

const CustomSignUpButton = styled.button`
  background-color: green;
  width:150px;
`

const WeedDiv = styled.div`
  display: flex;
  justify-content: center;
`

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
    /* 
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
    */
    return (
    <div>
      <CustomDiv>
      <CustomForm onSubmit={this.handleSubmit}>
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
      <CustomButton type='submit' onClick={() => Auth.login()}>Login</CustomButton>
      <Link to="/signup">
      <CustomSignUpButton>New Here? Sign Up!</CustomSignUpButton>
      </Link>
    </CustomForm>
      </CustomDiv>
      <WeedDiv>
        <img src = "https://www.austinchronicle.com/binary/0031/pols_feature32.jpg" alt="weed" />
      </WeedDiv>
    </div>
    )
  }
}

export default LoginTest;