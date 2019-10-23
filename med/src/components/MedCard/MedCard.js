import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../redux/actions';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import axios from 'axios';

const MedCard = ({ fetchData, data }) => {

  useEffect(() => {
    fetchData()
 
  }, [fetchData])

  // Not sure on data to delete
  const deleteStrain = strain => {
    axiosWithAuth()
    .delete(`https://medcabinet.herokuapp.com/strains/strain/${strain.strainid}`)
    .then(res => {
      console.log(res)
      fetchData([...data.filter(s => s.id !== strain.strainid)])
    })
    .catch(err => {
      console.log('delete error', err)
    })
  }

  // Save strain to user
  const saveStrain = strain => {
    axiosWithAuth()
    .post(`https://medcabinet.herokuapp.com/strains/strain/user`, strain)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('delete error', err)
    })
  }

  return (
    <div>
      <h1>MedCard info</h1>
      {
        data.map(strain => (
          <div key={strain.strainid}>
            <h2>{strain.strainname}</h2>
            <button onClick={() => deleteStrain(strain)}>Delete</button>
            <button onClick={() => saveStrain(strain)}>Save</button>
            <p>Rating: {strain.rating}</p>
            <p>TYPE: {strain.type}</p>
            <p>{strain.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { fetchData })(MedCard);
