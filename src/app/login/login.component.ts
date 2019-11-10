import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin(value) {
    console.log('user milgaya', value.username);
    this.user = value.username;
    
  }

  close() {
    this.dialogRef.close({data: this.user});
  }

}
