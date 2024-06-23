import { createReducer, on } from '@ngrx/store';
import { loadMeanings } from '../actions/meanings.actions';
import { MeaningState } from 'src/app/core/models/meaning.state';

export const initialState: MeaningState = { loading: false, meanings: [] };

export const meaningsReducer = createReducer(
  initialState,
  on(loadMeanings, (state) => {
    return { ...state, loading: true };
  })
);
