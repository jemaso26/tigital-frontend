import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { UserModel } from './shared/models/UserModel';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/api/v1/users';
  private axiosInstance: AxiosInstance;
  private token = localStorage.getItem('authToken');

  constructor(private http: HttpClient) {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
    });
  }

  register(user: UserModel): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, user, { headers });
  }

  signUp(username: string, password: string): Observable<any> {
    const headers = {
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
      'Content-Type': 'application/json',
    };

    return from(this.axiosInstance.post('', null, { headers })).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}
