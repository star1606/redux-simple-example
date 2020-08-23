import { combineReducers } from "redux";
import count from "./Count";
import inputs from "./Inputs";

const rootReducer = combineReducers({
  count,
  inputs,
});

export default rootReducer;
