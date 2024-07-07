import { ActionReducerMap } from '@ngrx/store';
import { BoardState } from '../core/models/board.model';
import { boardReducer } from './reducers/board.reducer';

export interface AppState {
  board: BoardState;
  //TODO: Here we can put more states.
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  board: boardReducer,
};
