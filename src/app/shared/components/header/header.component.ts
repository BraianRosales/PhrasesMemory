import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() clickedOnSearch = new EventEmitter<string>();
  searchForm!: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      searchControl: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  get searchValue() {
    return this.searchForm.get('searchControl')?.value;
  }

  searchMeanings(event: Event) {
    event.preventDefault();
    this.clickedOnSearch.emit(this.searchValue);
  }
}
