import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinicnew';
  Logout: boolean = false;
  login: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {

    if ((localStorage.getItem('token') as string) == null) {
      this.Logout = true;
      this.login = false;
    }
    else {
      this.Logout = false;
      this.login = true;
    }
  }


   async logout() {
    debugger
    // remove user from local storage to log user out
    localStorage.removeItem('token');

    setTimeout(function () { location.reload(); }, 0);
    this.router.navigate(['login']);
    location.reload();
    this.ngOnInit()
  }

}
