import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Registrarse', component: RegistrarseComponent},
  { path: 'About', component: AboutComponent},
];
