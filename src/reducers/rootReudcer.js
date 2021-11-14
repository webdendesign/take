import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactListReducer from "./contact-list-reducer";
import statusReducer from "./status-reducer";
import authReducer from "./auth-reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"]
};

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  contactList: contactListReducer
});

export default persistReducer(persistConfig, rootReducer);
