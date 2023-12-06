import { Component } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onLogout(): void {
    let close = confirm('¿Seguro que deseas scerrar sesión?');
    if (close) {
      this.authService.logout().subscribe({
        next: (response) => {
          if (response.succeed) {
            this.router.navigate(['auth']);
          } else {
            console.log('Error: ', response.error);
          }
        },
        error: (error) => {
          console.log('Error', error);
        },
      });
    }
  }
}
