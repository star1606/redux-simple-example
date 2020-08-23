import { LOGIN_USER } from "../actions/Inputs.js";

const initailStates = {};

export default function (state = initailStates, action) {
  switch (action.type) {
    case LOGIN_USER: {
      console.log("디폴트아님");
      return {
        ...state,
        inputs: action.payload,
      };
    }
    default: {
      console.log("디폴트");
      return state;
    }
  }
}
