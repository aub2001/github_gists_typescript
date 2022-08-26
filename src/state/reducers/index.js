import {combineReducers} from "redux";
import gistReducer from "./gistReducer";
import { themeReducer } from "./themeReducer";

const RootReducer = combineReducers({
  gist: gistReducer,
  theme: themeReducer,
});

export default RootReducer