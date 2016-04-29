import {Injectable} from 'angular2/core';

@Injectable()
export class LoginService {
	private person:any;

	getPerson() {
		return this.person;
	}

	setPerson(p:any) {
		this.person = p;
	}
}
