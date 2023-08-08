import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Logged in successfully');
        // Handle successful login (e.g., navigate to another page)
        // After successful login
        console.log(response.token);
        localStorage.setItem('authToken', response.token);
        //To retrieve the token later:
        //const authToken = localStorage.getItem('authToken');
      },
      (error) => {
        console.error('Login failed', error);
        const {
          response: { data },
        } = error;

        alert(data.message);
      }
    );
  }
}
