import { Injectable } from '@angular/core';
import { UserSession } from '../interfaces/UserSession.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public saveSessionData(data: UserSession): void {
    sessionStorage.setItem('userSession', JSON.stringify(data));
  }

  public getSessionData(): UserSession {
    const data = sessionStorage.getItem('userSession');
    return data ? JSON.parse(data) : null;
  }

  public clearSessionData(): void {
    sessionStorage.removeItem('userSession');
  }
}
