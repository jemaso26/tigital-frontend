import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/v1/auth';
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
    });
  }

  login(username: string, password: string): Observable<any> {
    const headers = {
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
      'Content-Type': 'application/json',
    };

    return from(this.axiosInstance.post('', null, { headers })).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}
