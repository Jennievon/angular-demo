import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
    static incorrectOldPassword(control: AbstractControl): ValidationErrors | null {
        if (control.value !== '1234')
            return { incorrectOldPassword: true };
        return null;
    }

    static isPasswordsMatched(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { isPasswordsMatched: false };
        return null;
    }
}