import { APIService } from '../index';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class AuthenticationService extends APIService {

	constructor(http: Http) {
		super(http);
	}

	sign_up(person: any) {
		let body = JSON.stringify({person: person});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.getUrl('signup'), body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	sign_in(email: string, password: string) {
		let headers = new Headers({ 'Authorization': 'Basic '+window.btoa(email+':'+password)});
		let options = new RequestOptions({ headers: headers });

			return this.http.get(this.getUrl('authentication'), options)
		// return this.http.get('assets/person.json')
			.map(this.extractData)
			.catch(this.handleError);
	}
}
