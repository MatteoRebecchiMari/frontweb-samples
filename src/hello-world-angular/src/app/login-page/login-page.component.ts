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

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChanged(event: Event): void {
    this._updateUI();
  }

  onPasswordChanged(event: Event): void {
    this._updateUI();
  }

  _updateUI(): void {
    this.isLoginEnabled = !this._isEmptyFunction(this.username) && !this._isEmptyFunction(this.password);
  }

  _isEmptyFunction(stringValue: String): boolean {
    return (!stringValue || stringValue.length === 0);
  }

  onLogin() {
    console.log("Login pressed");
  }

}
