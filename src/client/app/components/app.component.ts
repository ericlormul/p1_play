import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {SearchComponent} from '../+search/index';
import {ProgramComponent} from '../+program/index';
import {ProgramDirectoryComponent} from '../+program_directory/index';
import {LoginComponent} from '../+login/index';
import {SignupComponent} from '../+signup/index';
import {PersonAdminComponent} from '../+person/index';

@Component({
  selector: 'p1-app',
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, FooterComponent],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchComponent
  },
  {
    path: '/program_directory',
    name: 'Program Directory',
    component: ProgramDirectoryComponent
  },
  {
    path: '/program/:id',
    name: 'Program',
    component: ProgramComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  },
  {
    path: '/person/admin',
    name: 'PersonAdmin',
    component: PersonAdminComponent
  }
])
export class AppComponent {}
