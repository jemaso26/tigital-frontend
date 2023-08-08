import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './shared/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:8080/api/v1/auth';
  private token = "dsfd";

  constructor(private http: HttpClient) {}

  register(user: UserModel): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, user, { headers });
  }
}
