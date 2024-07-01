import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { MeaningState } from "src/app/core/models/meaning.state";

export const selectMeaningsFeature = (state: AppState) => state.meaningsList;

export const selectListMeanings = createSelector(
    selectMeaningsFeature,
    (state: MeaningState) => state.meanings
)

export const selectLoadingMeanings = createSelector(
    selectMeaningsFeature,
    (state: MeaningState) => state.loading
)