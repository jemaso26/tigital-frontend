import { Inject, Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { UserModel } from 'src/app/shared/models/UserModel';

import {
  ICreateProfileResponse,
  IProfileDataSource,
} from '../data-providers/RestProfileService';
import { REST_PROFILE_SERVICE_TOKEN } from 'src/app/shared/injection-tokens/rest.profile.token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token = localStorage.getItem('authToken');
  constructor(
    @Inject(REST_PROFILE_SERVICE_TOKEN) private dataProvider: IProfileDataSource
  ) {}

  register(
    userId: number,
    userModel: UserModel
  ): Observable<ICreateProfileResponse> {
    return from(this.dataProvider.create(userId, userModel)).pipe();
  }
}
