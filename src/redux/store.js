import { createStore, applyMiddleware } from "redux";
import { addItem } from "./reducer/addItem.reducer";
import logger from "redux-logger";

export const store = createStore(addItem, applyMiddleware(logger));
