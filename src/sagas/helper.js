import { put } from "redux-saga/effects";
import { actionTypes } from "../actions";
const { SUCCESS, FAILURE } = actionTypes;


export function* sendPayload(apiResponse, event) {
  yield put({
      type: apiResponse.data.Response === "True" ? event[SUCCESS] : event[FAILURE],
      payload: apiResponse.data
          ? apiResponse.data.Response === "True"
              ? apiResponse.data
              : apiResponse.data.Error
          : {},
  })
}

export function* sendPayloadFailure(error, event) {
  if (error) {
    yield put({
      type: event[FAILURE],
      payload: error ? error : {}
    });
  } else {
    if (error.status === undefined) {
      yield put({
        type: event[FAILURE],
        payload: { code: "NETWORK_ERROR_CUSTOM" }
      });
    } else {
      yield put({
        type: event[FAILURE],
        payload: error.error
      });
    }
  }
}
