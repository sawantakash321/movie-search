export const PENDING = "PENDING";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const CLEAR_SUGGESIONS = 'CLEAR_SUGGESIONS'

export const createRequestTypes = base => {
  return [PENDING, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const GET_MOVIE_SUGGESIONS = createRequestTypes("GET_MOVIE_SUGGESIONS");
export const GET_MOVIE_DETAILS = createRequestTypes("GET_MOVIE_DETAILS");
