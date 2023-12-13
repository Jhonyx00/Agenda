import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserInfoService } from 'src/app/shared/services/userInfo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private userService: UserService,
    private userInfoService: UserInfoService
  ) {}
  toLoginPage() {
    this.router.navigate(['auth/login']);
  }

  userControl: string = 'authUser';
  passwordControl: string = 'authPassword';

  formLogin = new FormGroup({
    authUser: new FormControl('', [
      Validators.minLength(2),
      Validators.required,
    ]),
    authPassword: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    const userData = this.formLogin.value;
    if (this.formLogin.valid) {
      this.authService.register(userData).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          this._snackBar.open(
            'Error en la comunicación con el servidor, intentelo más tarde',
            'Aceptar',
            {
              duration: 3000,
              panelClass: ['red-snackbar'],
            }
          );
        },
      });
    }
  }

  setUserInfo() {
    let user: any;
    this.userService.getUserInfo().subscribe({
      next: (response) => {
        if (response.succeed) {
          console.log('User: ', response);
          user = response.result.user;
          this.userInfoService.changeUserData(user);
        }
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }
}
