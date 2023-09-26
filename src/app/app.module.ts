import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StarwarsService } from './services/starwars.service';
import { StarshipListComponent } from './component/starship-list/starship-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipDetailComponent } from './component/starship-detail/starship-detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    StarshipListComponent,
    StarshipDetailComponent,
    NavbarComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StarwarsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
