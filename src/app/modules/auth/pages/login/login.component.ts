import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  //
  userControl: string = 'authUser';
  passwordControl: string = 'authPassword';
  //

  formLogin = new FormGroup({
    authUser: new FormControl('', [
      Validators.minLength(2),
      Validators.required,
    ]),
    authPassword: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log('is form valid?', this.formLogin.valid);
    const userData = this.formLogin.value;
    if (this.formLogin.valid) {
      console.log('Datos del formulario: ', userData);
    }

    // const credentials = {
    //   authUser: 'admin',
    //   authPassword: 'admin',
    // };

    this.authService.login(userData).subscribe(
      (data) => {
        if (data.succeed) {
          console.log('datos: ', data);
          console.log('Inicio de sesión exitoso!');
          console.log('Token de acceso:', data.result.accessToken);
          console.log('Token de actualización:', data.result.refreshToken);
          console.log('Expira en:', data.result.expiresAt);
        } else {
          console.log('Inicio de sesión fallido:', data.message);
        }
      },
      (error) => console.log(error)
    );
  }

  // onSubmit() {
  //   console.log('is form valid?', this.formLogin.valid);

  //   // const { user, password } = this.formLogin.value;
  //   if (this.formLogin.valid) {
  //     const userData = this.formLogin.value;
  //     console.log('Datos del formulario: ', userData);

  //     //servicio de auth para autenticacion
  //     this.authService
  //       .login({ username: userData.user, password: userData.password })
  //       .subscribe({
  //         next: (response) => {
  //           console.log('Los datos son: ', response),
  //             this.router.navigate(['home/contacts']);
  //         },
  //         error: (error) => {
  //           console.log('El error es: ', error);
  //         },
  //       });
  //   }
  // }
}
