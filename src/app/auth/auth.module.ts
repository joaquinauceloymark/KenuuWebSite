import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ForgotPasswordComponent, LoginComponent, RegisterComponent],
  exports: [ForgotPasswordComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule, ReactiveFormsModule],
  providers: [CookieService],
})
export class AuthModule {}
