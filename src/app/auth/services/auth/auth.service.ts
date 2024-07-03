import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IRegisterRequest } from '../../types/register-request';
import { ICurrentUser } from 'src/app/shared/types/current-user/current-user';
import { IAuthResponse } from '../../types/auth-response';
import { constants } from 'src/app/constants';
import { ILoginRequest } from '../../types/login-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/users/login';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/user';
    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser));
  }

  updateCurrentUser(
    currentUserInput: ICurrentUser
  ): Observable<ICurrentUser> {
    const url = constants.apiUrl + '/user';
    return this.http
      .put<IAuthResponse>(url, currentUserInput)
      .pipe(map(this.getUser));
  }
}
