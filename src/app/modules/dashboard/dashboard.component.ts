import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { CardsBoardComponent } from 'src/app/shared/components/cards-board/cards-board.component';
import { CardSearchHistoryComponent } from 'src/app/shared/components/card-search-history/card-search-history.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DictionaryServices } from 'src/app/core/services/dictionary.service';
import { Context, Definition, Meaning } from 'src/app/core/models/apiResponse.model';
import { BoardComponent } from 'src/app/shared/components/board/board.component';
import { loadBoard, loadedBoard } from 'src/app/state/actions/board.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BoardComponent,
    LoginComponent,
    CardsBoardComponent,
    CardSearchHistoryComponent,
    HttpClientModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DictionaryServices],
})
export class DashboardComponent implements OnInit {
  store = inject(Store<any>);
  dictionaryServices = inject(DictionaryServices);
  loading$: Observable<boolean> = new Observable();

  ngOnInit(): void {
  }

  searchWord(word: string) {
    this.store.dispatch(loadBoard({word})); //Here I also call board.effects, to call this.dictionaryServices.getContexts(action.word).
  }
}
