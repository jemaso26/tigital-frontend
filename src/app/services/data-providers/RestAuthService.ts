import { Injectable } from '@angular/core';
import axios, { AxiosError } from 'axios';
import {
  IRegisteredUser,
  RegisteredUser,
} from 'src/app/shared/models/RegisteredUser';
import { TigitalError } from 'src/app/shared/utils/TigitalError';

export type ISignupResponse = IRegisteredUser;

export interface IAuthDataSource {
  login(username: string, password: string): Promise<ILoginReponse>;
  signUp(username: string, password: string): Promise<ISignupResponse>;
}

export interface ILoginReponse {
  token: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class RestAuthService implements IAuthDataSource {
  private _module = 'AuthRest';
  private _url = '/api/v1/auth';
  private axiosInstance = axios.create({
    baseURL: this._url,
  });

  async login(username: string, password: string): Promise<ILoginReponse> {
    try {
      const headers = {
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
        'Content-Type': 'application/json',
      };

      const {
        data: { token, userId },
      } = await this.axiosInstance.patch('', null, { headers });

      return { token, userId };
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;
        throw new TigitalError({
          message: data.message,
          scope: data.scope,
          module: this._module,
        });
      }

      throw error;
    }
  }

  async signUp(username: string, password: string): Promise<ISignupResponse> {
    try {
      const headers = {
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
        'Content-Type': 'application/json',
      };

      const { data } = await this.axiosInstance.post('', null, { headers });

      return new RegisteredUser({
        userId: data.userId,
        username: data.username,
        userRole: data.userRole,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;
        throw new TigitalError({
          message: data.message,
          scope: data.scope,
          module: this._module,
        });
      }

      throw error;
    }
  }
}
