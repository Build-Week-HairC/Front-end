import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

export const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: ''
}

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        data: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default useReducer;
