import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAnAccountComponent } from '../get-an-account/get-an-account.component';
import { Router } from '@angular/router';
import { navOption } from 'src/app/core/models/nav.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, GetAnAccountComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  options: navOption[] = [];
  router = inject(Router);

  constructor() {
    this.options = [
      {
        name: 'Dashboard',
        path: 'dashboard',
        isActive: true,
        icon: 'dashboard'
      },
      {
        name: 'Información',
        path: 'info',
        isActive: false,
        icon: 'info'
      },
      {
        name: 'Favoritas',
        path: 'favorites',
        isActive: false,
        icon: 'kid_star'
      },
      {
        name: 'Configuración',
        path: 'config',
        isActive: false,
        icon: 'manufacturing'
      },
    ];
  }

  navigateTo(index: number) {
    this.options.forEach((option: navOption, i) => {
      option.isActive = i === index;
    })

    this.router.navigate([`/${this.options[index].path}`]);
  }

}
