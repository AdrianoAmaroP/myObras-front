import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

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

  // todo: trocar pra reactive forms vai ajudar a fazer validações
  isLoginValid: boolean = true;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // faz a req
    this.auth.login(this.user.username, this.user.password).subscribe({
      complete: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);

        // mostra erro
        this.isLoginValid = false;
      },
    });
  }
}

interface LoginUser {
  username: string;
  password: string;
}
