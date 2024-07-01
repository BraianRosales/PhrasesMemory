import { Component, Input, OnInit, inject } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { selectListMeanings } from 'src/app/state/selectors/meanings.selectors';

@Component({
  selector: 'app-meaning-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meaning-board.component.html',
  styleUrls: ['./meaning-board.component.scss'],
})
export class MeaningBoardComponent implements OnInit {
  store = inject(Store<AppState>);
  meanings$: Observable<any> = new Observable();

  ngOnInit(): void {
   this.meanings$ =  this.store.select(selectListMeanings)
  }
}
