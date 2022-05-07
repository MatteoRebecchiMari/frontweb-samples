import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isLoginEnabled: boolean = false;

  // This property use Binding [(ngModel)]="username"
  username: String = "";

  // This property use Binding [(ngModel)]="password"
  password: String = "";
  isPasswordVisible = false;

  inputPasswordType(): String {
    return this.isPasswordVisible ? "text" : "password";
  }

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChanged(event: Event): void {
    this._updateUI();
  }

  onPasswordChanged(event: Event): void {
    this._updateUI();
  }

  // enable/disable login button
  _updateUI(): void {
    this.isLoginEnabled = !this._isEmptyFunction(this.username) && !this._isEmptyFunction(this.password);
  }

  // check empty string
  _isEmptyFunction(stringValue: String): boolean {
    return (!stringValue || stringValue.length === 0);
  }

  // Toggle password visibility
  onPasswordVisiblityChanged() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Login button pressed
  onLogin() {
    console.log("Login pressed");
    this.username = '';
    this.password = '';
  }

}
