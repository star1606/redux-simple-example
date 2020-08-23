import * as countActions from "../actions/Count";

const intialStates = {
  count: 0,
};

const reducers = (state = intialStates, action) => {
  const { type } = action;
  switch (type) {
    case countActions.INCREASE_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case countActions.DECREASE_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
