import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-get-an-account',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './get-an-account.component.html',
  styleUrls: ['./get-an-account.component.scss']
})
export class GetAnAccountComponent {

}
