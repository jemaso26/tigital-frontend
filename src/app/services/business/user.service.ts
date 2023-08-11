import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

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
}
