import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from '../index';

@Injectable()
export class SessionService extends APIService {
	url = 'session/';

	constructor(http:Http) {
		super(http);
	}

	get(id:number) {
		return this.http.get(this.getUrl(this.url + id))
										.map(this.extractData)
										.catch(this.handleError);
	}

	create(session:any, token:string) {
		let body = this.stringifyBody(session);
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'create'), body, options)
										.map(this.extractData)
										.catch(this.handleError);
	}

	update(session:any, token:string) {
		let body = this.stringifyBody(session);
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'update'), body, options)
										.map(this.extractData)
										.catch(this.handleError);
	}
}
