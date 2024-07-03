import { createReducer, on } from '@ngrx/store';
import { loadMeanings, loadedMeanings } from '../actions/meanings.actions';
import { MeaningState } from 'src/app/core/models/meaning.model';

export const initialState: MeaningState = { loading: false, meanings: [] };

export const meaningsReducer = createReducer(
  initialState,
  on(loadMeanings, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMeanings, (state, {meanings}) => {
    return { ...state, loading: false, meanings };
  })
);
