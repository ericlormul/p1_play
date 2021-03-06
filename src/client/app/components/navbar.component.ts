import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'p1-navbar',
  templateUrl: 'app/components/navbar.component.html',
  styleUrls: ['app/components/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
