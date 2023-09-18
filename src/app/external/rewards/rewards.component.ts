import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css'],
})
export class RewardsComponent {
  @Input() showBanner: boolean = true;
}
