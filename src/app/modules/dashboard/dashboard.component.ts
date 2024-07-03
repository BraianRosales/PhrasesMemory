import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { CardsBoardComponent } from 'src/app/shared/components/cards-board/cards-board.component';
import { CardSearchHistoryComponent } from 'src/app/shared/components/card-search-history/card-search-history.component';
import { MeaningBoardComponent } from 'src/app/shared/components/meaning-board/meaning-board.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Store } from '@ngrx/store';
import { loadedMeanings } from 'src/app/state/actions/meanings.actions';
import { Observable } from 'rxjs';
import { selectLoadingMeanings } from 'src/app/state/selectors/meanings.selectors';
import { HttpClientModule } from '@angular/common/http';
import { DictionaryServices } from 'src/app/core/services/dictionary.service';
import { Context } from 'src/app/core/models/ApiResponse.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MeaningBoardComponent,
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
    this.loading$ = this.store.select(selectLoadingMeanings);
  }

  searchMeaning(word: string) {
    this.dictionaryServices.getContexts(word).subscribe((context: Context[]) => {
      // this.store.dispatch(
      //   loadedMeanings({
      //     meanings: context.meanings,
      //   })
      // );
    });
  }
}
