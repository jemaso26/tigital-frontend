import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.signUp(this.username, this.password).subscribe(
      (response) => {
        console.log({ response });
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
