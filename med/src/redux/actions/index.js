import axios from 'axios';
import { axiosWithAuth } from '../../components/utils/AxiosWithAuth';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

// action creator
export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get('https://medcabinet.herokuapp.com/strains/strains')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
}

export const saveStrain = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axiosWithAuth()
    .post('https://medcabinet.herokuapp.com/strains/strain')
    .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
}