import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  //
  userControl: string = 'user';
  passwordControl: string = 'password';
  //

  formLogin = new FormGroup({
    user: new FormControl('', [Validators.minLength(2), Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log('is form valid?', this.formLogin.valid);

    // const { user, password } = this.formLogin.value;
    if (this.formLogin.valid) {
      const userData = this.formLogin.value;
      console.log('Datos del formulario: ', userData);
      this.router.navigate(['home/contacts']);
      //servicio de auth para autenticacion
    }
  }
}
