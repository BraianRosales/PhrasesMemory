import { ActionReducerMap } from '@ngrx/store';
import { MeaningState } from '../core/models/meaning.model';
import { meaningsReducer } from './reducers/meanings.reducer';

export interface AppState {
  meaningsList: MeaningState;
  //TODO: Aca pueden ir mas estados.
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  meaningsList: meaningsReducer,
};
