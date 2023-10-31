import { Component, OnInit } from '@angular/core';
import { UserSession } from 'src/app/interfaces/UserSession.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo!: UserSession;
  username: string = 'usuario';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.userInfo = this.accountService.getSessionData();

    this.username = this.userInfo.firstName;
  }
}
