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

  ngOnInit(): void {
    this.board$ = this.store.select(selectBoard);
  }

  translate(definition: string, example: string | undefined) {
    this.translationService
      .translateText(
        'en',
        'es',
        `Definición: ${definition} - Ejemplo: ${example}`
      )
      .subscribe({
        next: (res: any) => {
          console.log('RES:', res);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          console.log('Translation completed');
        },
      });
  }
}
