import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SPRINT8';
  isWelcomePage = false;
  isLoggedIn = true;
  loggedInUserName: string | null = null;
  showNavbar = true;

  constructor(private router: Router, public authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       
        this.showNavbar = event.url !== '/';
      }
    });
    this.authService.loginStatusChanged.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      this.loggedInUserName = this.authService.getLoggedInUserName();
    });
  }

  ngOnInit(): void {

    this.updateLoginStatus();
    this.authService.loginStatusChanged.subscribe(() => {
      this.updateLoginStatus();
    });
  }

  updateLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedInUser();
    this.loggedInUserName = this.authService.getLoggedInUserName();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
