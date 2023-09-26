import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipListComponent } from './component/starship-list/starship-list.component';
import { StarshipDetailComponent } from './component/starship-detail/starship-detail.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'starships', component: StarshipListComponent, canActivate: [AuthGuard] },
  { path: 'starship/:id', component: StarshipDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
