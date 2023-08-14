
import { Inject, Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { UserModel } from 'src/app/shared/models/UserModel';

import { REST_AUTH_SERVICE_TOKEN } from 'src/app/shared/injection-tokens/rest.auth.token';
import { ICreateProfileResponse, IProfileDataSource } from '../data-providers/RestProfileService';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token = localStorage.getItem('authToken');
  constructor(@Inject(REST_AUTH_SERVICE_TOKEN) private dataProvider: IProfileDataSource) {
  }

  register(userModel: UserModel): Observable<ICreateProfileResponse> {
    return from(this.dataProvider.create(userModel)).pipe();
  }
}

