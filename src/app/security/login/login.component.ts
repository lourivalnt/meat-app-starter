import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),
      })
  }
}