import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: LoginUser = {
    username: '',
    password: '',
  };

  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {

    console.log('Form submitted', form);
    console.log('User', this.user);
    this.isLoading = true;

    // todo: fazer o subscribe e redirecionar para o dashboard
    throw new Error('Method not implemented.');
  }
}

interface LoginUser {
  username: string;
  password: string;
}
