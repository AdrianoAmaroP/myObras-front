import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: LoginUser = {
    username: '',
    password: '',
  };

  isLoading: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('Form submitted', form);
    console.log('User', this.user);
    this.isLoading = true;

    this.auth.login(this.user.username, this.user.password).subscribe(
      (response) => {
        console.log('Response', response);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error', error);
        this.isLoading = false;
      }
    );
  }
}

interface LoginUser {
  username: string;
  password: string;
}
