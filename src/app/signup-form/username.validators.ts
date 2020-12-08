import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    // use static to access this from the outside without having to create any class instance

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return {
                cannotContainSpace: true
            };
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Jen')
                    resolve({
                        shouldBeUnique: true
                    });
                else resolve(null);
            }, 2000);
        });
    }
}