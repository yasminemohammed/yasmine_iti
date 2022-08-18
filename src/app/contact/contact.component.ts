import { Component, OnInit } from '@angular/core';
import {user} from '../classes/user';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: user = new user();
  data: any;
  email!: string;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  sendEmail(name: string, email: string, subject: string, message: string)
  {
    this.user.name = name;
    this.user.email = email;
    this.user.subject = subject;
    this.user.message = message;
    this.contactService.sendEmail(this.user).subscribe( data => {this.data = data; });
  }

}
