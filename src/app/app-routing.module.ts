import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { BenefitProgramsComponent } from './external/benefit-programs/benefit-programs.component';
import { ContactComponent } from './external/contact/contact.component';
import { FaqsComponent } from './external/faqs/faqs.component';
import { RewardsComponent } from './external/rewards/rewards.component';
import { InternalRoutingModule } from './internal/internal.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { ExternalRoutingModule } from './external/external.routing';
import { AuthComponent } from './auth/auth.component';
import { ExternalComponent } from './external/external.component';
import { ProfileComponent } from './internal/profile/profile.component';
import { DownloadWalletComponent } from './internal/download-wallet/download-wallet.component';
import { EditProfileComponent } from './internal/edit-profile/edit-profile.component';
import { PersonalInformationComponent } from './internal/personal-information/personal-information.component';
import { PointsComponent } from './internal/points/points.component';
import { TransactionsComponent } from './internal/transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: ExternalComponent,
  },
  {
    path: 'benefit-programs',
    component: BenefitProgramsComponent,
    data: { titulo: '' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { titulo: 'Contáctanos' },
  },
  {
    path: 'faqs',
    component: FaqsComponent,
    data: { titulo: '' },
  },
  {
    path: 'rewards',
    component: RewardsComponent,
    data: { titulo: '' },
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
    path: 'profile',
    component: ProfileComponent,
    data: { titulo: '' },
  },
  { path: 'points', component: PointsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'download-wallet', component: DownloadWalletComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // AuthRoutingModule,
    // InternalRoutingModule,
    // ExternalRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
