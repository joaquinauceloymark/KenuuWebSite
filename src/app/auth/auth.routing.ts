import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { titulo: 'Iniciar sesión' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { titulo: 'Registro' },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { titulo: '¿Olvidaste tu constraseña?' },
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
