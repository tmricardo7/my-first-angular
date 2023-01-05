import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, NgModel, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { UsersService } from './services/users.service';

export function forbiddenName(control: FormControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value);
    return control.value === 'Test' ? { forbiddenName: { value: control.value } } : null;
  };
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsersService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultType: string = "advanced";

  @ViewChild('f') myForm: NgForm;
  @ViewChild('password') myPass: NgModel;
  myValidator: Validator;

  //

  myForm2: FormGroup;

  constructor(private usersService: UsersService) { }

  onSubmit() {
    console.log(this.myForm.value);
    console.log(this.myPass);

  }

  onSubmit2() {
    console.log(this.myForm2.value);
  }

  ngOnInit(): void {

    this.myForm2 = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project': new FormControl(null, [Validators.required, forbiddenName],this.forbiddenNameAsync),
      'status': new FormControl('finished'),
    })
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === 'Test Async' ? resolve({ 'forbiddenNameAsync': true }) : resolve(null);
      }, 1500);
    });
    return promise;
  }
}
