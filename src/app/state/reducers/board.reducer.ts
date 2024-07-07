import { createReducer, on } from '@ngrx/store';
import { BoardState } from 'src/app/core/models/board.model';
import { loadBoard, loadedBoard } from '../actions/board.actions';

export const initialState: BoardState = {
  word: '',
  definitions: [],
  loading: false,
};

export const boardReducer = createReducer(
  initialState,
  on(loadBoard, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedBoard, (state, { board }) => {
    return { ...state, ...board, loading: false };
  })
);
