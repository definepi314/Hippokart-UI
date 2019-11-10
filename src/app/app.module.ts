import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactusComponent } from './contactus/contactus.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


import {
  MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatSlideToggleModule, MatTabsModule, MatDialogModule, MatListModule,
  MatBadgeModule
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MobileService } from './services/mobile.service';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    SignUpComponent, LoginComponent, CartComponent, MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule,
    BrowserAnimationsModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule,
    MatGridListModule, MatIconModule, MatSlideToggleModule, MatTabsModule, MatDialogModule, MatListModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MobileService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ContactusComponent, SignUpComponent, LoginComponent]
})
export class AppModule { }
