import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, FETCH_USER_SUCCESS, ADD_STRAIN, REMOVE_STRAIN } from "../actions";
import { removeStrainItem, addStrainToFavorites } from '../utils';

export const INITIAL_STATE = {
  data: [],
  user: [],
  saved: [],
  isFetching: false,
  error: ''
}

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        data: action.payload
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        user: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_STRAIN:
      return {
        ...state,
        saved: [...state.saved, action.payload]
      }
    case REMOVE_STRAIN:
      return {
        ...state,
        saved: state.saved.filter(element => element !== action.payload)
      }
    default:
      return state;
  }
}

export default useReducer;
