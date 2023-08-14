import { Component } from '@angular/core';
import { AuthService } from '../services/business/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signUp(this.username, this.password).subscribe(
      (response) => {
        console.log({ response });
      },
      (error) => {
        console.error('Login failed', error);
        alert(error.message);
      }
    );
  }
}
