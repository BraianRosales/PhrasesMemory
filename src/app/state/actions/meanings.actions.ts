import { createAction, props } from "@ngrx/store";
import { Meaning } from "src/app/core/models/ApiResponse.model";

export const loadMeanings = createAction(
    '[Meaning List] load meanings'
)

export const loadedMeanings = createAction(
    '[Meaning List] Loaded success',
    props<{meanings: Meaning[]}>()
)