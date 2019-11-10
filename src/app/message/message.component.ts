  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { MatDialogRef } from '@angular/material';
  import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  loginForm: FormGroup;
  user;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<MessageComponent>) { }

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLogin(value) {
    console.log('user milgaya 2', value.username);
    this.user = value.username;
    
  }

  close() {
    this.dialogRef.close({data: this.user});
  }

}
