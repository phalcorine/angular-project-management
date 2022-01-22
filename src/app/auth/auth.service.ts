import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './dto/login.request';
import { LoginResponse } from './dto/login.response';
import { SignupRequest } from './dto/signup.request';
import { SignupResponse } from './dto/signup.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = `${environment.apiUrl}/auth`;

  constructor(private readonly httpClient: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.authUrl}/login`, request);
  }

  signup(request: SignupRequest): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(`${this.authUrl}/signup`, request);
  }
}
