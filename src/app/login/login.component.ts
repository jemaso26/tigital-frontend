import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          console.log('Logged in successfully');
          // Handle successful login (e.g., navigate to another page)
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login error (e.g., display error message)
        }
      );

    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
