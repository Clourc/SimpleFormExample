import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  users: User[] = [];

  user: User = new User('Lucas', '', 0, new Date());

  onSubmit() {
    this.users.push(this.user)
    console.log(this.users);
  }
}