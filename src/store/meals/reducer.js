import * as types from "./actionTypes";

const initialState = {
  loading: false,
  Meals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MEAL_SUCCESS: {
      return {
        ...state,
        loading: true,
        Meals: action.payload,
      };
    }
    case types.MEAL_ERROR: {
      return {
        ...state,
        loading: true,
        Meals: [],
      };
    }

    default:
      return state;
  }
};

export default mealReducer;
