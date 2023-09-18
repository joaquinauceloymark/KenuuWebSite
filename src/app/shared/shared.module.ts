import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BreadcrumbsComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
