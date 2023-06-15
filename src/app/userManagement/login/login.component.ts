import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]],
      rememberMe: false
    })
  }

  ngOnInit() {
  }

  async login() {
    if (!this.loginForm.valid) {
      return;
    }


    const { data, error } = await this.auth.login(this.loginForm.value)
    console.log(data);
    if (error) {
      //TODO
    }
    else {
      this.router.navigate(['/builds'], {replaceUrl: true});
    }
  }

}
