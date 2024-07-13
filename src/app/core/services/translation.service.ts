import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private url = 'https://text-translator2.p.rapidapi.com/translate';
  http = inject(HttpClient);

  translateText(
    sourceLanguage: string,
    targetLanguage: string,
    text: string
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('source_language', sourceLanguage);
    formData.append('target_language', targetLanguage);
    formData.append('text', text);

    const headers = new HttpHeaders({
      'x-rapidapi-key': environment.rapidApiKey,
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
    });

    return this.http.post(this.url, formData, { headers });
  }
}
