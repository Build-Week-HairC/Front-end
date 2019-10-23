import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get('https://medcabinet.herokuapp.com/strains/strains')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
}
