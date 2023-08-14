import { Injectable } from '@angular/core';
import axios, { AxiosError } from 'axios';
import { UseRole } from 'src/app/shared/models/RegisteredUser';
import { UserModel } from 'src/app/shared/models/UserModel';
import { TigitalError } from 'src/app/shared/utils/TigitalError';

export interface ICreateProfileResponse {
  profileId: number;
  user: {
    userId: number;
    username: string;
    userRole: UseRole;
    createdAt: string;
    updatedAt: string;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProfileDataSource {
  create(userId: number, userModel: UserModel): Promise<ICreateProfileResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class RestProfileService implements IProfileDataSource {
  private path = '/api/v1/users/';
  private token = localStorage.getItem('authToken');
  private axiosInstance = axios.create({
    baseURL: this.path,
  });
  private module = 'RestProfileServiceService';

  async create(
    userId: number,
    userModel: UserModel
  ): Promise<ICreateProfileResponse> {
    try {
      const headers = {
        Authorization: 'Bearer ' + this.token,
        'Content-Type': 'application/json',
      };

      const { data } = await this.axiosInstance.post(
        `${userId}/profile`,
        {
          firstName: userModel.firstName,
          lastName: userModel.lastName,
          email: userModel.email,
          phone: userModel.phone,
        },
        {
          headers,
        }
      );

      return {
        profileId: data.profileId,
        user: data.user,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data;
        throw new TigitalError({
          message: data.message,
          scope: data.scope,
          module: this.module,
        });
      }
      throw error;
    }
  }
}
