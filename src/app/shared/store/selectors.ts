import { createSelector } from "@ngrx/store";
import { AppState } from "../types";

const usersSelectorFeature = (state: AppState) => state.users

export const loadingSelector = createSelector(usersSelectorFeature, (state) => state.loading)