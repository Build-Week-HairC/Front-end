import React from 'react';
import { axiosWithAuth } from './utils/AxiosWithAuth';

class SignupTest extends React.Component {
  state = {
    username: "",
    password: "",
    primaryemail: ""
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
      .post(
        "https://medcabinet.herokuapp.com/createnewuser",
        {
          username: JSON.stringify(`${this.state.username}`),
          password: JSON.stringify(`${this.state.password}`),
          primaryemail: JSON.stringify(`${this.state.primaryemail}`)
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => { 
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/medcabinet');
      })
      .catch(err => console.log("Token not return", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default SignupTest;