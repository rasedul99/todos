import todoReducer from "./todos/reducer";
import fiterReducer from "./filters/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: fiterReducer,
});

export default rootReducer;
