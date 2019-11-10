import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  formValues;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SignUpComponent>) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClickSubmit(value) {
    console.log('signup submitted', value);
    this.formValues = value;
    this.signUpForm.reset();

  }

  closeDialogbox() {
  this.dialogRef.close({ data: this.formValues });
  }

}
