import { combineReducers } from "redux";
import { actionTypes } from "../actions";

const {
  REQUEST,
  FAILURE,
	SUCCESS,
	GET_MOVIE_SUGGESIONS,
	GET_MOVIE_DETAILS,
	CLEAR_SUGGESIONS
} = actionTypes;

const initialState = {
	suggesions: {},
	details: {},
	error: ''
}

const entities = () => {
  const movies = (state = initialState, {type, payload}) => {
    switch (type) {
			case GET_MOVIE_SUGGESIONS[REQUEST]:
				return state
			case GET_MOVIE_SUGGESIONS[SUCCESS]:
				return {
					...state,
					suggesions: payload,
					error: ''
				}
			case GET_MOVIE_SUGGESIONS[FAILURE]:
				return {
					...state,
					suggesions: {},
					error: payload
				}
			case GET_MOVIE_DETAILS[REQUEST]:
				return state
			case GET_MOVIE_DETAILS[SUCCESS]:
				return {
					...state,
					details: payload,
					error: ''
				}
			case GET_MOVIE_DETAILS[FAILURE]:
				return {
					...state,
					details: {},
					error: payload
				}
			case CLEAR_SUGGESIONS:
				return {
					...state,
					suggesions: [],
					error: ''
				}
      default:
        return state;
    }
	}

  return combineReducers({
		movies
  });
};

export default entities;
