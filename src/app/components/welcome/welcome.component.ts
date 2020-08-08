import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user = {
    firstName: 'Handsome Jack',
    isSubscribed: false
  }

  askAboutName = true

  changeFirstName(firstNameRef:HTMLInputElement){
    this.user.firstName = firstNameRef.value
  }

  constructor() { }

  askIfSubscribed(){
    return this.user.isSubscribed ? 
    'You are subscribed' : `Want to get updates ${this.user.firstName}?`
  }

  ngOnInit(): void {
  }

}
