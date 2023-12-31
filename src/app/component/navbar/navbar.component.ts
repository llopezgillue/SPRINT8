import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  loggedInUserName: string | null = null;
  isWelcomePage = true;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isWelcomePage = event.url === '/';
      }
    });
    this.authService.loginStatusChanged.subscribe(() => {
      this.updateLoginStatus();
    });
  }

  ngOnInit(): void {

    this.updateLoginStatus();
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
