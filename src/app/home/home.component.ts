import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactusComponent } from '../contactus/contactus.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MobileService } from '../services/mobile.service';
import { AddUserService } from '../services/addUser.service';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;
  tiles: Tile[] = [
    { text: 'HippoCart', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
  ];

  @ViewChild('myCarousel') myCarousel: any;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
  }

  showMobilesList: boolean = false;
  mobiles;
  productList = [];
  badgeCount: any;

  constructor(private cdr: ChangeDetectorRef, private formBuilder: FormBuilder,
    public dialog: MatDialog, private route: Router, private serv: MobileService,
    private service: AddUserService) { }

  ngOnInit() {
    this.badgeCount = '';
    localStorage.clear();
    this.searchForm = this.formBuilder.group({
      searchName: [''],
    });
    this.showMobilesList = false;
    const fakeUser = {
      'username': 'foo',
      'password': 'foo'
    }
    this.service.getToken(fakeUser).subscribe(response => {
      console.log('got token', Object.values(response)[0]);
      sessionStorage.setItem('auth_token', Object.values(response)[0]);
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  goToHome() {
    console.log('home clicked');
    this.route.navigate(['/contact']);

  }

  goToLogin() {
    console.log('login clicked');
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.data);
      localStorage.setItem('user', result.data);
    });
  }

  goToContact() {
    console.log('contact clicked');
    const dialogRef = this.dialog.open(ContactusComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  goToCosumerScore() {
    console.log('Consumer clicked');
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.data);
      localStorage.setItem('user', result.data);
    });
  }

  goToSignUp() {
    console.log('signUp clicked');
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.data);
      this.service.adduser(result.data).subscribe(user => {
        console.log('response from add user service', user);
      })
    });
  }

  showMobiles() {
    console.log('mobiles clicked');
    this.showMobilesList = true;
    this.serv.getMobiles().subscribe(response => {
      console.log('response', response);
      this.mobiles = response;
    })
  }

  addtoCart(i) {
    console.log('product got', i);
    this.productList.push(i);
    this.badgeCount = this.productList.length;
    localStorage.setItem('productList', JSON.stringify(this.productList));
  }

}
