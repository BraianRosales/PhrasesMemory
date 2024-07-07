import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { selectBoard } from 'src/app/state/selectors/board.selector';
import { BoardState } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  store = inject(Store<AppState>);
  board$: Observable<BoardState> = new Observable();

  ngOnInit(): void {
    this.board$ = this.store.select(selectBoard);
    this.board$.subscribe((res) => {
      console.log('SELECT:', res)
    })
  }
}
