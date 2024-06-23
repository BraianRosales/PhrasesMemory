import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadMeanings } from 'src/app/state/actions/meanings.actions';
@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {
  @Input() placeholder: string = 'Escriba la palabra y buscar...';
  store = inject(Store<any>);
  searchForm!: FormGroup;

  ngOnInit(): void {
    this.store.dispatch(loadMeanings());
    this.searchForm = new FormGroup({
      searchControl: new FormControl(''),
    });
  }

  get searchValue() {
    return this.searchForm.get('searchControl')?.value;
  }
}
