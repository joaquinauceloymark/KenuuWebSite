import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlApi: string = environment.urlAPI;
  constructor(private http: HttpClient) {}

  private isAuthenticated = false;

  login(loginData: any) {
    const urlApi = `${this.urlApi}/loginclient`;
    return this.http.post(urlApi, loginData);
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
