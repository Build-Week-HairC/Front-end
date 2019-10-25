import React from 'react';
import { axiosWithAuth } from './utils/AxiosWithAuth';
import styled from "styled-components";


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

    const StrainWrapper = styled.div`
      .button {
        display: flex;
        justify-content: center;
        margin: 10px;
      }
    `;

    
    return (
      <StrainWrapper>
      <div className="strain-input">
        <form onSubmit={this.handleSubmit}>
        <input className="strain-box"
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
        <div className="button">
        <button type='submit'>Add New Strain</button>
        </div>
      </div>
      </StrainWrapper>
    );
  }
}

export default AddNewStrain;