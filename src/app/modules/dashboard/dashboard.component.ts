import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { CardsBoardComponent } from 'src/app/shared/components/cards-board/cards-board.component';
import { CardSearchHistoryComponent } from 'src/app/shared/components/card-search-history/card-search-history.component';
import { MeaningBoardComponent } from 'src/app/shared/components/meaning-board/meaning-board.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Store } from '@ngrx/store';
import {
  loadMeanings,
  loadedMeanings,
} from 'src/app/state/actions/meanings.actions';
import { Observable } from 'rxjs';
import { selectLoadingMeanings } from 'src/app/state/selectors/meanings.selectors';
import { MeaningsServices } from 'src/app/core/services/meanings.service';
import { ApiResponse } from 'src/app/core/models/ApiResponse.model';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [MeaningsServices],
})
export class DashboardComponent implements OnInit {
  store = inject(Store<any>);
  meaningsServices = inject(MeaningsServices);
  loading$: Observable<boolean> = new Observable();

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingMeanings);
  }

  searchMeaning(word: string) {
    this.meaningsServices.getMeanings(word).subscribe((res: ApiResponse) => {
      this.store.dispatch(
        loadedMeanings({
          meanings: res.meanings
        })
      );
    });
  }
}
