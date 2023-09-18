import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DownloadWalletComponent } from './download-wallet/download-wallet.component';
import { PointsComponent } from './points/points.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'points', component: PointsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'download-wallet', component: DownloadWalletComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalRoutingModule {}
