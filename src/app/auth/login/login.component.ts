import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { SwalService } from 'src/app/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Variables

  //Formulario Reactivo
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private cookies: CookieService,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      chkRememberMe: [false],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.swalService.Advertencia();
    }

    //Seteo de cookies
    if (this.loginForm.get('chkRememberMe')?.value === true) {
      const expireDate = new Date();
      expireDate.setFullYear(expireDate.getFullYear() + 10);

      this.cookies.set(
        'username',
        this.loginForm.get('username')?.value,
        expireDate
      );

      this.cookies.set(
        'pass',
        this.loginForm.get('password')?.value,
        expireDate
      );
    }

    let loginData: any = {
      user: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.login(loginData).subscribe((data) => {
      console.log(data);
    });
  }
}
