import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../redux/actions';

const MedCard = ({ fetchData, data }) => {

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h1>MedCard info</h1>
      {
        data.map(strain => (
          <div key={strain.strainid}>
            <h2>{strain.strainname}</h2>
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
