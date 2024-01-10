import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import welcome from "./welcome";
import meal from "./meals";

const config = {
  key: "root",
  debug: true,
  storage: storage,
  //   blacklist: [
  //     "Snackbar",
  //     "promotion",
  //     "modal",
  //     "reward",
  //     "overlay",
  //     "target",
  //     "order",
  //     "campaignProducts",
  //     "activity",
  //     "sellMore",
  //   ],
  //   whitelist: [
  //     "global",
  //     "user",
  //     "cart",
  //     "productCart",
  //     "product",
  //     "search",
  //     "store",
  //     "globalWebReducer",
  //   ],
};

const AppReducers = combineReducers({
  welcome,
  meal,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const pReducer = persistReducer(config, rootReducer);

export default pReducer;
