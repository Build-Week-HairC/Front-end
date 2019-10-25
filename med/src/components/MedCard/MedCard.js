import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchData, dsData } from '../../redux/actions';

import { saveStrain } from '../../redux/actions/index';

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
  const MedCard = ({ fetchData, dsData, data, saveStrain }) => {
  useEffect(() => {
    dsData()
 
  }, [dsData, fetchData])

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
            <button onClick={() => saveStrain(strain)}>&#128077;</button>
            <p>Rating: {strain.rating}</p>
            <p>TYPE: {strain.type}</p>
            <p>{strain.description}</p>
          </div>
          </MedWrapper>
        ))
      }
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

export default connect(mapStateToProps, { fetchData, dsData, saveStrain })(MedCard);
