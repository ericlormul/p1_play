import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {AuthenticationService} from '../../shared/index';
import {LoginService} from '../../shared/index';
import { Router } from 'angular2/router';

@Component({
	selector: 'p1-login',
	templateUrl: 'app/+login/components/login.component.html',
	styleUrls: ['app/+login/components/login.component.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	providers: [AuthenticationService]
})

export class LoginComponent {
	email: string;
	password: string;
	errorMessge: string;

	constructor(private authService: AuthenticationService,
		private loginService: LoginService,
		private _router: Router) {}

	sign_in() {
		this.authService.sign_in(this.email, this.password)
					.subscribe(person => {
						this.loginService.setPerson(person);
						this._router.navigate(['Home']);
					}, error => this.errorMessge = error);
	}
}
