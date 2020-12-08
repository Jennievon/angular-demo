import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [
        Validators.required,
        PasswordValidator.incorrectOldPassword,
      ]],
      newPassword: ['', Validators.required],
      confirmPassword: ['',
        Validators.required
      ]
    }, {
      validators: PasswordValidator.isPasswordsMatched
    });
  }


  public get oldPassword() {
    return this.form.get('oldPassword')
  }

  public get newPassword() {
    return this.form.get('newPassword')
  }

  public get confirmPassword() {
    return this.form.get('confirmPassword')
  }


}
