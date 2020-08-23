import { combineReducers } from "redux";
import count from "./Count";

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
