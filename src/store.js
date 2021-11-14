import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";

import reducer from "./reducers/rootReudcer";

const middleware = [thunk];

if(process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
