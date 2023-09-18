import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadWalletComponent } from './download-wallet/download-wallet.component';
import { PointsComponent } from './points/points.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PointsComponent,
    TransactionsComponent,
    DownloadWalletComponent,
    PersonalInformationComponent,
    EditProfileComponent,
  ],
  exports: [
    ProfileComponent,
    PointsComponent,
    TransactionsComponent,
    DownloadWalletComponent,
  ],
  imports: [CommonModule],
})
export class InternalModule {}
