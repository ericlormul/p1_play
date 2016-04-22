import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {SearchComponent} from '../+search/index';
import {CampComponent} from '../+camp/index';
import {CampDirectoryComponent} from '../+camp_directory/index';
import {LoginComponent} from '../+login/index';

@Component({
  selector: 'p1-app',
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
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
    path: '/camp_directory',
    name: 'Camp Directory',
    component: CampDirectoryComponent
  },
  {
    path: '/camp/:id',
    name: 'Camp',
    component: CampComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
])
export class AppComponent {}
