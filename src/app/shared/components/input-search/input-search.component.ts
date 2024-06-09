import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {
  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchControl: new FormControl(''),
    });
  }

  get searchValue() {
    return this.searchForm.get('searchControl')?.value;
  }
}
