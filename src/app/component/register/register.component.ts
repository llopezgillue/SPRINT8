import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router desde '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  isUserLoggedIn: boolean = false;
  isRegistrationFailed: boolean = false;
  showError: boolean = false;

  constructor(public authService: AuthService, private router: Router) {} // Inyectamos Router aquí

  register(): void {
    if (this.authService.register(this.username, this.password)) {
      this.isUserLoggedIn = false;
      this.username = '';
      this.password = '';
      console.log('registro ok');

      // Redirigir a la página de inicio de sesión después de un registro exitoso
      this.router.navigate(['/login']);
    } else {
      this.isRegistrationFailed = true;
      console.log('registro no ok');
    }
  }
}
