/**
 API Mocking process
 */
 import _meals from "./dummyMeal.json";
 const Meals = {
    getMeals: (getFrom) => getFrom(_meals),
  };
 export default Meals;
 