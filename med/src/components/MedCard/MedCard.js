import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../redux/actions';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

import { removeStrain } from '../../redux/actions/index';

import AddNewStrain from '../AddNewStrain';

const MedCard = ({ fetchData, data }) => {
  const [favorites, setFavorites] = useState([]);
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
  /*
  const saveStrain = strain => {
    // Auth.isAuthenticated()
    axiosWithAuth()
    .post(`https://medcabinet.herokuapp.com/strains/strain`, strain)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('delete error', err)
    })
  }
  */

  
  const addStrain = (strain) => {
    console.log('ADD STRAIN', strain)
    const newStrain = {
      strain: strain.strain,
      strainid: strain.strainid,
      effects: strain.effects,
      flavors: strain.flavors
    }
    setFavorites([...favorites, newStrain]);
  }
  
  
  // Save without axios
  const removeStrain = strain => {
    setFavorites([...favorites.filter(c => c.strainid !== strain.strainid)])
  }

  return (
    <div>
      <h1>MedCard info</h1>
      <AddNewStrain />
      {
        data.map(strain => (
          <div key={strain.strainid}>
            {console.log(strain)}
            <h2>{strain.strain}</h2>
            <button onClick={() => removeStrain(strain)}>Delete</button>
            <button onClick={() => addStrain(strain)}>Save</button>
            <p>Rating: {strain.rating}</p>
            <p>TYPE: {strain.type}</p>
            <p>{strain.description}</p>
          </div>
        ))
      }
      <h2>Favoites</h2>
      {
        favorites.map(strain => (
          <div key={Date.now()}>
            <h2>{console.log(strain)}</h2>
            <span onClick={() => removeStrain(strain)}>&#9734; {strain.strain}</span>
            <p>Effects: {strain.effects}</p>
            <p>Flavors: {strain.flavors}</p>
          </div>
        ))
        }
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, { fetchData })(MedCard);
