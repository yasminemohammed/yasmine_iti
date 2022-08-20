import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testApp';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  name?: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void
  {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.name = user.name;
      console.log(this.name);
    }

    $(window).on('load',function()
    {

      setTimeout(function()
      {
        $('.loader-wrapper').css({'height':'0'})
        $('.loader-wrapper').css('opacity','0')
      },1000)
    })
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}







