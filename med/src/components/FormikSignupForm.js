import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignUp = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid green;
  width: 200px;
  align-items: center;;
  margin: 100px auto 0 auto;
  padding: 20px;
`

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid green;
  width: 300px;
  align-items: center;;
  margin: 100px auto 0 auto;
  padding: 20px;
  background-color: green;
`

const CustomButton = styled.button`
  background-color: green;
  padding: 10px;
`

class SignupTest extends React.Component {
  state = {
    username: "",
    password: "",
    primaryemail: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://medcabinet.herokuapp.com/createnewuser",
        {
          'username': `${this.state.username}`,
          'password': `${this.state.password}`,
          'primaryemail': `${this.state.primaryemail}`
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log("error", err));
  };

  render() {
    return (
    <div>
      <StyledDiv>
        <SignUp onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <input
            type="text"
            name="primaryemail"
            value={this.state.primaryemail}
            onChange={this.handleChange}
            placeholder="Primary Email"
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </SignUp>
      </StyledDiv>
      <StyledDiv2>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51fEBRNxTGL._AC_.jpg" alt="weed" />
      </StyledDiv2>
      </div>
    );
  }
}

export default SignupTest;