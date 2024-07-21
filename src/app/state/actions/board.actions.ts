import { createAction, props } from '@ngrx/store';
import { BoardState } from 'src/app/core/models/board.model';

export const loadBoard = createAction(
  '[board state] load board state',
  props<{ word: string }>()
);

export const loadedBoard = createAction(
  '[board state] Loaded success',
  props<{ board: BoardState }>()
);
