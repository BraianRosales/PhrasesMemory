import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/ApiResponse.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MeaningsServices {
    http = inject(HttpClient);

    getMeanings(word: string) {
        return this.http.get<ApiResponse[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).pipe(
                map((responseArray) => responseArray[0])
            );
    }
}
