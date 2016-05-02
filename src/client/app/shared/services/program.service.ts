import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from '../index';

@Injectable()
export class ProgramService extends APIService {
	url = 'programs/';

	constructor(http : Http) {
		super(http);
	}

	create(program:any, token:string) {
		let body = this.stringifyBody(program);
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'create'), body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	get(id:number) {
		return this.http.get(this.getUrl(this.url + id))
										.map(this.extractData)
										.catch(this.handleError);
	}

	search(query:string) {
		return this.http.get(this.getUrl(this.url + 'search/' + this.formatFullTextQuery(query)))
										.map(this.extractData)
										.catch(this.handleError);
	}

	getByCategory(category: string) {
		return this.http.get(this.getUrl(this.url + 'category/' + category))
										.map(this.extractData)
										.catch(this.handleError);
	}

	update(program:any, token:string) {
		let body = this.stringifyBody(program);
		let options = this.optionsWithToken(token);

		return this.http.post(this.getUrl(this.url + 'update'), body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private formatFullTextQuery(raw_query: string) {
		return raw_query.trim().replace(/ +/, '+').toLowerCase();
	}
}
