import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../shared/models/UserModel';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css'],
})
export class RegisterProfileComponent {
  user = new UserModel({ firstName: '', lastName: '', phone: '', email: '' });

  constructor(private userService: UserService) {}

  onSubmit() {
    // Call the service to register the user
    this.userService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );


  }

}
