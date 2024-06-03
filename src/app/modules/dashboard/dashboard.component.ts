import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhraseFinderComponent } from 'src/app/shared/components/phrase-finder/phrase-finder.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { CardsBoardComponent } from 'src/app/shared/components/cards-board/cards-board.component';
import { CardSearchHistoryComponent } from 'src/app/shared/components/card-search-history/card-search-history.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PhraseFinderComponent, LoginComponent, CardsBoardComponent, CardSearchHistoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
