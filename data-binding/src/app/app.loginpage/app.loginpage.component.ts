import { Component } from '@angular/core';

@Component({
  selector: 'app-app.loginpage',
  templateUrl: './app.loginpage.component.html',
  styleUrls: ['./app.loginpage.component.css']
})
export class AppLoginpageComponent {

  emailAddress:string="Enter Email Address";

  submitLoginDetails(){
    this.emailAddress = "";
  }
}
