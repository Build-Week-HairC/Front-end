import React from 'react';
import { axiosWithAuth } from './utils/AxiosWithAuth';

class AddNewStrain extends React.Component {
  state = {
    strain: '',
    type: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('https://medcabinet.herokuapp.com/strains/strain')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='strain'
          value={this.state.strain}
          onChange={this.handleChange}
          placeholder='strain'
        />
        <input
          type='text'
          name='type'
          value={this.state.type}
          onChange={this.handleChange}
          placeholder='strain type'
        />
        </form>
        <button type='submit'>Add New Strain</button>
      </div>
    );
  }
}

export default AddNewStrain;