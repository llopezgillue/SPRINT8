import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private loggedInUserName: string | null = null;
  public showOptions= true;
  errorMessage:string | null=null;


  // Define un EventEmitter para emitir eventos de cambio de estado
  loginStatusChanged = new EventEmitter<boolean>();

  private registeredUsers: { username: string; password: string }[] = [];

  register(username: string, password: string): boolean {
    // Verifica si el usuario ya existe
    const existingUser = this.registeredUsers.find((user) => user.username === username);

    if (existingUser) {
      this.errorMessage = 'User already exists, please sign up with a new user.';
      return false;
    }

    // Registra al nuevo usuario
    this.registeredUsers.push({ username, password });

    // No llames a la función login aquí

    return true;
  }
  login(username: string, password: string): boolean {
    // Verifica si el usuario y la contraseña coinciden
    const user = this.registeredUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Inicio de sesión exitoso
      this.isLoggedIn = true;
      this.loggedInUserName = username;
      this.loginStatusChanged.emit(true);

      // Establecer showOptions en true cuando el usuario inicia sesión
      this.showOptions = true;

      return true;
    }

    // Inicio de sesión fallido
    return false;
  }

  logout(): void {

    this.isLoggedIn = false;
    this.loggedInUserName = null;
    this.loginStatusChanged.emit(false);
    //this.showOptions = false;
  }

  isLoggedInUser(): boolean {
    return this.loggedInUserName !== null;
  }

  getLoggedInUserName(): string | null {
    return this.loggedInUserName;
  }
}
