import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: LoginUser = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

    console.log('Form submitted', form);
    console.log('User', this.user);

    throw new Error('Method not implemented.');
  }
}

interface LoginUser {
  username: string;
  password: string;
}
