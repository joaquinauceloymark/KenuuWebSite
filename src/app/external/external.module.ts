import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitProgramsComponent } from './benefit-programs/benefit-programs.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SharedModule } from '../shared/shared.module';
import { FaqsAccordionComponent } from './faqs-accordion/faqs-accordion.component';
import { ExternalComponent } from './external.component';

@NgModule({
  declarations: [
    BenefitProgramsComponent,
    RewardsComponent,
    FaqsComponent,
    ContactComponent,
    FaqsAccordionComponent,
    ExternalComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    BenefitProgramsComponent,
    RewardsComponent,
    FaqsComponent,
    ContactComponent,
    ExternalComponent,
  ],
})
export class ExternalModule {}
