import { useState } from "react";
import { useReduxApi } from "../../hooks";
import { getMeals } from "../../store/meals/action";

export const useDiet = () => {
  const { dispatchApi } = useReduxApi();
  const [meals, setMeals] = useState([]);
  const sortArray = ["BREAKFAST", "LUNCH", "DINNER"];

  const getMealsList = async () => {
    await dispatchApi(getMeals).then((data) => {
      const mealData = handleSortMeals(data);
      setMeals(mealData);
    });
  };

  const handleSortMeals = (mealsArr) => {
    if (mealsArr?.length > 0) {
      mealsArr.sort(
        (a, b) =>
          sortArray.indexOf(a?.mealType) - sortArray.indexOf(b?.mealType)
      );
    }
    return mealsArr;
  };

  return {
    meals,
    getMealsList,
  };
};
