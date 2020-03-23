/* eslint-disable no-constant-condition */
import { push } from "connected-react-router";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions";
import { getMovieSuggestions, getMovieDetails} from '../services'
import { sendPayload, sendPayloadFailure } from "./helper";

const { REQUEST, GET_MOVIE_DETAILS, GET_MOVIE_SUGGESIONS } = actionTypes;


function* handleGetMovieSuggestions({ data }) {
  try {
		const apiResponse = yield call(getMovieSuggestions, data);
    yield sendPayload(apiResponse, GET_MOVIE_SUGGESIONS);
  } catch (e) {
    yield sendPayloadFailure(e, GET_MOVIE_SUGGESIONS);
  }
}

function* handleGetMovieDetails({ data }) {
  try {
    const apiResponse = yield call(getMovieDetails, data);
		yield sendPayload(apiResponse, GET_MOVIE_DETAILS);
		yield put(push(`/movies/${apiResponse.data.imdbID}`))
  } catch (e) {
    yield sendPayloadFailure(e, GET_MOVIE_DETAILS);
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all({
    watchGetMovieSuggestions: takeLatest(
      GET_MOVIE_SUGGESIONS[REQUEST],
      handleGetMovieSuggestions
		),
		watchGetMovieDetails: takeLatest(
      GET_MOVIE_DETAILS[REQUEST],
      handleGetMovieDetails
		),
  });
}
