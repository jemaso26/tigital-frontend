import { Inject, Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  IAuthDataSource,
  ILoginReponse,
  ISignupResponse,
} from '../data-providers/RestAuthService';
import { REST_AUTH_SERVICE_TOKEN } from 'src/app/shared/injection-tokens/rest.auth.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(REST_AUTH_SERVICE_TOKEN) private dataProvider: IAuthDataSource
  ) {}

  login(username: string, password: string): Observable<ILoginReponse> {
    return from(this.dataProvider.login(username, password)).pipe();
  }

  signUp(username: string, password: string): Observable<ISignupResponse> {
    return from(this.dataProvider.signUp(username, password)).pipe();
  }
}
