import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { numberReducer } from "./ducks/numberReducer";

const store = createStore(
  numberReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
