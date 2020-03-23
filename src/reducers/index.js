import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import entities from "./entities";

export default history => {
  return combineReducers({
    router: connectRouter(history),
    entities: entities(),
  });
};
