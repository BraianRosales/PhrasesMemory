import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { CardsBoardComponent } from 'src/app/shared/components/cards-board/cards-board.component';
import { CardSearchHistoryComponent } from 'src/app/shared/components/card-search-history/card-search-history.component';
import { MeaningBoardComponent } from 'src/app/shared/components/meaning-board/meaning-board.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MeaningBoardComponent, LoginComponent, CardsBoardComponent, CardSearchHistoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
