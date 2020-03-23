import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

export default history => {
  return combineReducers({
    router: connectRouter(history)
  });
};
