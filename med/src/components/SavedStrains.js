import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { fetchData, deleteStrain } from '../redux/actions/index';
import { axiosWithAuth } from '../components/utils/AxiosWithAuth';
import MedCard from './MedCard/MedCard';

const SavedStrains = ({ fetchData, data, deleteStrain }) => {
  useEffect(() => {
    fetchData()
 
  }, [fetchData])

  // Not sure on data to delete
  /*
  const deleteStrain = strain => {
    axiosWithAuth()
    .delete(`https://medcabinet.herokuapp.com/strains/strain`, { data: {'strain': strain.strain}})
    .then(res => {
      console.log(res)
      fetchData();
      // fetchData([...data.filter(s => s.id !== strain.strainid)])
    })
    .catch(err => {
      console.log('delete error', err)
    })
  }
  */

  return (
    <div>
      <h1>Favorites</h1>
      {
        data.map(strain => (
          <div key={strain.strainid}>
            <h2>{console.log(strain)}</h2>
            <h2>{strain.strain}</h2>
            <p>Rating: {strain.rating}</p>
            <button onClick={() => deleteStrain(strain)}>&#10060;</button>
            <span>&#9734; {strain.strain}</span>
            <p>{strain.description}</p>
            <p>TYPE: {strain.type}</p>
            <p>Effects: {strain.effects}</p>
            <p>Flavors: {strain.flavors}</p>
          </div>
        ))
        }
        <Route path='/medcard' component={MedCard} {...data} />
        <Link to="/medcard">Back To List</Link>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data,
    saved: state.saved
  }
}

export default connect(mapStateToProps, { fetchData, deleteStrain })(SavedStrains);
