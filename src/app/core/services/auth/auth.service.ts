import { LocalStorageService } from './../storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  login(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/login', {
      nome: username,
      senha: password,
    });
  }

  setTokenInLocalStorage(token: string): boolean {
    this.storage.setItem('token', token);

    return true;
  }

  getTokenFromLocalStorage() {
    return this.storage.getItem('token');
  }


}
