import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  form;

  constructor(private route: Router, private fb: FormBuilder, private dialogRef: MatDialogRef<ContactusComponent>) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: [''],
      subject: [''],
      comment: ['']
    });
  }

  backtoHome() {
    this.route.navigate(['home']);
  }

  submit(value) {
    console.log('form submitted', value);
    this.form = value;
  }

  close() {
    this.dialogRef.close({data: this.form});
  }

}
