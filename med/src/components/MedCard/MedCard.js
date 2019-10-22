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
          <span key={strain.strainid}>Description: {strain.description}</span>
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
