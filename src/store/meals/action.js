import * as types from "./actionTypes";
import DummyMeal from "../../service/dummyData/dummyMeal";

export const getMeals = (request, headerConfig) => {
  return async (dispatch) => {
    return await DummyMeal.getMeals((data) => {
      if (data?.body?.meals?.length > 0) {
        dispatch({
          type: types.MEAL_SUCCESS,
          payload: data?.body?.meals,
        });
        return data?.body?.meals;
      } else {
        dispatch({
          type: types.MEAL_ERROR,
        });
      }
    });
  };
};
