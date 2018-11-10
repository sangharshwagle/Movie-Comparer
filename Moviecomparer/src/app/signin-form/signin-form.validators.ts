import { AbstractControl, ValidationErrors } from "@angular/forms";


export class SignInFormValidators {

    static spaceNotAllowed(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0){
            return { 
                NoSpaceAllowed: true
            }
        }
        return null;
    }

    

}