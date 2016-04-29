import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {LoginService} from '../shared/index';


@Component({
  selector: 'p1-toolbar',
  templateUrl: 'app/components/toolbar.component.html',
  styleUrls: ['app/components/toolbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ToolbarComponent {

	constructor(public loginService: LoginService,
		private _router: Router) {}

	log_out() {
		this.loginService.setPerson(undefined);
		this._router.navigate(['Home']);
	}
}
