import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BoardState } from 'src/app/core/models/board.model';

export const selectBoardState = (state: AppState) => state.board;

export const selectBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state
);

export const selectDefinitionsBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state.definitions
);

export const selectLoadingBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state.loading
);
