import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  searchForm: FormGroup;
  productList; 
  badgeCount: any;
  date;
  amount = 0;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private route: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date().getTime() + 2 * 24 * 60 * 1000, 'yyyy-MM-dd');
    this.searchForm = this.fb.group({
      searchName: [''],
    });
    console.log('product list', JSON.parse(localStorage.getItem('productList')));
    this.productList = JSON.parse(localStorage.getItem('productList'));
    this.badgeCount = this.productList.length;
    for (let i=0; i < this.productList.length; i++) {
      this.amount+=this.productList[i].productPrice
    }
  }

  removeItem(index)  {
    console.log('index', index);
    this.productList.splice(index, 1);
    this.badgeCount = this.productList.length;
    for (let i=0; i < this.productList.length; i++) {
      this.amount+=this.productList[i].productPrice
    }
    if (this.badgeCount === 0) {
      this.badgeCount = '';
      localStorage.clear();
      this.route.navigateByUrl('/home');
    }
  }

  placeOrder() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.data);
      localStorage.setItem('user', result.data);
    });



    // console.log('user name', localStorage.getItem('user'));
    // if (localStorage.getItem('user') !== null) {
    //   this.productList = [];
    //   this.badgeCount = '';
    //   this.amount = 0;
    //   this.route.navigateByUrl('/home');
    // } else {
    //   this.route.navigateByUrl('/login');
    // }


  }



}
