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

  constructor(private userService: UserService) {}

  onSubmit() {
    // Call the service to register the user
<<<<<<< HEAD
    this.userService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );


=======
>>>>>>> a6a3cc62e2632f5a019922b528854f40471a63f9
  }

}
