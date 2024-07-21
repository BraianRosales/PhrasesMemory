import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { selectBoard } from 'src/app/state/selectors/board.selector';
import { BoardState } from 'src/app/core/models/board.model';
import { ButtonComponent } from '../button/button.component';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [TranslationService],
})
export class BoardComponent implements OnInit {
  store = inject(Store<AppState>);
  translationService = inject(TranslationService);
  board$: Observable<BoardState> = new Observable();
  definitionTranslated: string = '';
  exampleTranslated: string = '';
  translations: {
    [index: number]: {
      definitionTranslated: string;
      exampleTranslated: string;
    };
  } = {};

  ngOnInit(): void {
    this.board$ = this.store.select(selectBoard);
    //TODO: Every time the board restarts I need to update the translations = {} or every time the user clicks  on button "buscar";
    //TODO: I have to learn effect with ngrx.
  }

  translate(definition: string, example: string | undefined, index: number) {
    this.translationService
      .translateText(
        'en',
        'es',
        `Definition: ${definition} Example: ${example}`
      )
      .subscribe({
        next: (res: any) => {
          const translatedText = res.data.translatedText;
          const exampleIndex = translatedText.indexOf('Ejemplo:');

          if (exampleIndex !== -1) {
            // Use the slice method to extract a part of the translatedText string that starts at index 0 and ends just before the exampleIndex.
            const definitionTranslated = translatedText
              .slice(0, exampleIndex)
              .trim();
            // Use slice to extract the part of the translatedText string that starts at exampleIndex and continues to the end of the string.
            let exampleTranslated = translatedText.slice(exampleIndex).trim();

            if (example == undefined) {
              exampleTranslated = 'Ejemplo: Sin Ejemplo.';
            }

            this.translations[index] = {
              definitionTranslated,
              exampleTranslated,
            };
          } else {
            this.translations[index] = {
              definitionTranslated: translatedText,
              exampleTranslated: '',
            };
          }
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {},
      });
  }
}
