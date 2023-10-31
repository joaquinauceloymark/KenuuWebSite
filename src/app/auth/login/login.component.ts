import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { SwalService } from 'src/app/swal.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

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
    private swalService: SwalService,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['joaquin.auce@gmail.com', Validators.required],
      password: ['Joaquin1', Validators.required],
      chkRememberMe: [false],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.swalService.AdvertenciaCamposObligatorios();
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
      Username: this.loginForm.get('username')?.value,
      Password: this.loginForm.get('password')?.value,
      Password2: '',
    };

    this.authService.login(loginData).subscribe((data: any) => {
      if (data.success == true) {
        this.accountService.saveSessionData(data.account);
        this.router.navigateByUrl('/profile');
      } else {
        this.swalService.Error();
      }
    });
  }
}
