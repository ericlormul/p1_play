import { Component } from 'angular2/core';
import { AuthenticationService } from '../../shared/index';
import { LoginService } from '../../shared/index';
import { Router } from 'angular2/router';

@Component({
	selector: 'p1-signup',
	templateUrl: 'app/+signup/components/signup.component.html',
	styleUrls: ['app/+signup/components/signup.component.css'],
	providers: [AuthenticationService]
})

export class SignupComponent {
	person = {};
	errorMessage:string;

	constructor(private authService: AuthenticationService,
		private loginService: LoginService,
		private _router:Router) {}

	sign_up() {
		this.authService.sign_up(this.person)
					.subscribe(person => {
						this.loginService.setPerson(person);
						this._router.navigate(['Home']);
					}, error => this.errorMessage = error);
	}
}
