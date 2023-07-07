import { ActionReducerMap } from "@ngrx/store";
import * as whisedActions from "./actions/wish.actions";
import * as whisedReducer from "./reducers/wish.reducers";

export interface AppState {
    State : whisedActions.IcatalogData,
}

export const appReducer: ActionReducerMap<AppState> = {
    State: whisedReducer.wishReducer,
}