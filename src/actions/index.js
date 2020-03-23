import * as actions from "./actiontypes";

const {
  GET_MOVIE_SUGGESIONS,
	GET_MOVIE_DETAILS,
	REQUEST,
	CLEAR_SUGGESIONS
} = actions;

export const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const getMovieSuggesionsAction = {
  request: data => action(GET_MOVIE_SUGGESIONS[REQUEST], { data })
};

export const getMovieDetailsAction = {
  request: data => action(GET_MOVIE_DETAILS[REQUEST], { data })
};

export const clearSuggestionAction = {
  request: () => action(CLEAR_SUGGESIONS)
};

export const actionTypes = {
  ...actions
};
