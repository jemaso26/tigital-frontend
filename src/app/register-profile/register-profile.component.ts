import { Component } from '@angular/core';
import { UserModel } from '../shared/models/UserModel';
import { UserService } from '../services/business/user.service';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css'],
})
export class RegisterProfileComponent {
  user = new UserModel({ firstName: '', lastName: '', phone: '', email: '' });
  private userId = localStorage.getItem('userId') as unknown as number;

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.register(this.userId, this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}
