import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form;

  login() {
    this.form.setErrors({
      invalidErrors: true
    })
  }
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: fb.control('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          UsernameValidators.cannotContainSpace,
          UsernameValidators.shouldBeUnique
        ]),
        password: fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      }),
      topics: new FormArray([])
    })
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  public get username() {
    return this.form.get('account.username')
  }

  public get password() {
    return this.form.get('account.password')
  }

  public get topics() {
    return this.form.get('topics') as FormArray
  }


}
