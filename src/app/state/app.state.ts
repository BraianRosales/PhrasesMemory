import { ActionReducerMap } from '@ngrx/store';
import { MeaningState } from '../core/models/meaning.state';
import { meaningsReducer } from './reducers/meanings.reducer';

export interface AppState {
  meaningsList: MeaningState;
  // favoritesList: ReadonlyArray<Meaning[]>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  meaningsList: meaningsReducer,
};
