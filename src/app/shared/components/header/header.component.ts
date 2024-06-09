import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from '../input-search/input-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
