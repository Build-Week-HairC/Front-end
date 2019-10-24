import React from 'react';
import axios from 'axios';

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
        "https://cors-anywhere.herokuapp.com/http://medcabinet.herokuapp.com/createnewuser",
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
        // this.props.history.push("/medcabinet");
      })
      .catch(err => console.log("error", err));
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignupTest;