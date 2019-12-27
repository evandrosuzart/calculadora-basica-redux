import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { numberRedulcer } from "./reducers";

const store = createStore(
  numberRedulcer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
