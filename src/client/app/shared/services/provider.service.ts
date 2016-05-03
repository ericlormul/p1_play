import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from '../index';

@Injectable()
export class ProviderService extends APIService {
	url = 'providers/';

	constructor(http:Http) {
		super(http);
	}

	get(id:number) {
		return this.http.get(this.getUrl(this.url + id))
										.map(this.extractData)
										.catch(this.handleError);
	}

	create(provider:any, token:string) {
		let body = this.stringifyBody({provider: provider.provider, location: provider.location});
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'create'), body, options)
		// return this.http.get('assets/person.json')
										.map(this.extractData)
										.catch(this.handleError);
	}

	update(provider:any, token:string) {
		let body = this.stringifyBody({provider: provider.provider, location: provider.location});
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'update'), body, options)
										.map(this.extractData)
										.catch(this.handleError);
	}

	getAll() {
		return this.http.get(this.getUrl(this.url + 'all'))
										.map(this.extractData)
										.catch(this.handleError);
	}

}
