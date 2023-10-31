import { Component, Input, OnInit } from '@angular/core';
import { UserSession } from 'src/app/interfaces/UserSession.interface';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  @Input() userInfo!: UserSession;

  constructor() {}
  ngOnInit(): void {}
}
