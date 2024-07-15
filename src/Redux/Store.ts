import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { ThunkDispatch, thunk, ThunkMiddleware } from "redux-thunk";
import { bgState, bgtype } from "./ActionType";
import { bgreducer } from "./BgReducer";
import { userReducer } from "../UserRedux/UserReducer";
import { userState } from "../UserRedux/ActionType";

export interface rootState {
  bg: bgState;
  user: userState;
}

const rootReducer  = combineReducers({
  bg: bgreducer,
  user: userReducer,
}) as any;

export type AppState = ReturnType<typeof rootReducer>;
const middleware: ThunkMiddleware<AppState, bgtype> = thunk;
export const store = legacy_createStore<AppState, bgtype>(
  rootReducer,
  applyMiddleware(middleware)
);
export type AppDispatch = ThunkDispatch<rootState, void, bgtype>;
