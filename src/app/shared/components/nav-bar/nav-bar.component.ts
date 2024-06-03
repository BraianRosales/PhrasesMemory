import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAnAccountComponent } from '../get-an-account/get-an-account.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, GetAnAccountComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

}
