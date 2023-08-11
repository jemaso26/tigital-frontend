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
  }
}
