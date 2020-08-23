import { createStore } from "redux";
// import inputReducer from "../reducers/Inputs";

const create = (inputReducer) => {
  return createStore(inputReducer);
};

export default create;
