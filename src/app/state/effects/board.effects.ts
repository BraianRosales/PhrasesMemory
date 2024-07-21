import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap, toArray } from 'rxjs/operators';
import { DictionaryServices } from 'src/app/core/services/dictionary.service';
import { loadBoard, loadedBoard } from '../actions/board.actions';
import { Context, Meaning } from 'src/app/core/models/apiResponse.model';

@Injectable()
export class BoardEffects {
    dictionaryServices = inject(DictionaryServices);
    actions$ = inject(Actions);

    loadBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBoard),
            exhaustMap((action) => // <= Here I have the action from loadBoard.
                this.dictionaryServices.getContexts(action.word).pipe(
                    mergeMap((contexts: Context[]) => contexts), // Flatten the array of contexts.
                    concatMap((context: Context) => context.meanings), // Flatten the array of meanings for each context
                    mergeMap((meaning: Meaning) => meaning.definitions), // Flatten the array of definitions for each meaning
                    toArray(), // Collect all definitions back into an array
                    map((definitions) => ({
                        word: action.word,
                        definitions: definitions,
                    })),
                    map((board) => loadedBoard({ board })),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}

/*
- mergeMap

Takes a list of contexts and separates them into individual issues, 
allowing each context to be processed separately in the next step of the RxJS flow.

Before mergeMap:
contexts: [
  { word: 'apple', meanings: [...] },
  { word: 'banana', meanings: [...] }
]
After mergeMap:

Issue 1: { word: 'apple', meanings: [...] }
Issue 2: { word: 'banana', meanings: [...] }

- concatMap

Does the same as mergeMap but keeps the order sequentially.
Both mergeMap and concatMap operators are used to flatten nested observables and transform issues.

------------------------------------------------------------------

Overview:

- mergeMap is useful when you don't care about order and want to handle operations concurrently.
- concatMap is useful when order matters and you want to handle operations sequentially.

    We are processing meanings within contexts, concatMap ensures that you process each context and its meanings in order, one after the other.
    its meanings in order, one after the other, which is probably what you need to maintain a coherent logic.
*/