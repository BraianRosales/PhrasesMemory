import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Context } from '../models/apiResponse.model';

@Injectable({
    providedIn: 'root',
})
export class DictionaryServices {
    http = inject(HttpClient);

    getContexts(word: string): Observable<Context[]> {
        return this.http.get<Context[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    }
}
