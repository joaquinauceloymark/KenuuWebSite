import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BenefitProgramsComponent } from './benefit-programs/benefit-programs.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ExternalComponent } from './external.component';

const routes: Routes = [
  {
    path: '',
    component: ExternalComponent,
    pathMatch: 'full',
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
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalRoutingModule {}
