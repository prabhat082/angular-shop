import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {FormBuilder, Validators, AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'db-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public SignInform: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  error: any;

  constructor(public af: AngularFire,
              private router: Router,
              private fb: FormBuilder) {

    this.SignInform = fb.group({
      "email": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.SignInform.controls["email"];
    this.password = this.SignInform.controls["password"];
  }

  ngOnInit() {
  }

  onSubmit(formData: any): void {
    // if(formData.valid) {
    console.log(formData.value);
    this.af.auth.createUser({
      email: formData.value.email,
      password: formData.value.password
    }).then(
      (success) => {
        console.log(success);
        // this.router.navigate(['/login'])
      }).catch(
      (err) => {
        console.log(err);
        this.error = err;
      })
    // }
  }

}