import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchData, dsData } from '../../redux/actions';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { removeStrain } from '../../redux/actions/index';
import AddNewStrain from '../AddNewStrain';
import SavedStrains from '../SavedStrains';
import styled from "styled-components";

const MedWrapper = styled.div`
  .strain-card {
    // display: flex;
    // flex-direction: column;
    padding: 30px;
  }
`;

const MedCardWrapper = styled.div`
  .medcard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MedCard = ({ fetchData, dsData, data }) => {


  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    // dsData()
    dsData()
 
  }, [dsData, fetchData])

  // Not sure on data to delete
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

  // Save strain to user
  
  const saveStrain = strain => {
    axiosWithAuth()
    .post(`https://medcabinet.herokuapp.com/strains/strain`, strain)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('delete error', err)
    })
  }
  

  
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
    <MedCardWrapper>
    <div className="medcard">
      <h1>MedCard Info</h1>
      <AddNewStrain />
     
      <Route path='/favorites' component={SavedStrains} {...data} />
      <Link to="/favorites">Liked</Link>
      
      {
        data.map(strain => (
          <MedWrapper>
          <div className="strain-card" key={strain.strainid}>
            {console.log(strain)}
            <h2>{strain.strain}</h2>
            <button onClick={() => deleteStrain(strain)}>&#10060;</button>
            <button onClick={() => saveStrain(strain)}>&#128077;</button>
            <p>Rating: {strain.rating}</p>
            <p>TYPE: {strain.type}</p>
            <p>{strain.description}</p>
          </div>
          </MedWrapper>
        ))
      }

      {/*<SavedStrains />*/}
      { /*
        data.map(strain => (
          <div key={strain.strainid}>
            <h2>{console.log(strain)}</h2>
            <span onClick={() => deleteStrain(strain)}>&#9734; {strain.strain}</span>
            <p>Effects: {strain.effects}</p>
            <p>Flavors: {strain.flavors}</p>
          </div>
        ))
        */}
    </div>
    </MedCardWrapper>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data,
    saved: state.saved
  }
}

export default connect(mapStateToProps, { fetchData, dsData })(MedCard);
