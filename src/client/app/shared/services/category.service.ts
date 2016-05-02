import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {APIService} from '../index';

@Injectable()
export class CategoryService extends APIService {
	url = 'category/';

	constructor(http:Http) {
		super(http);
	}

	getAll () {
		return this.http.get(this.getUrl(this.url + 'all'))
										.map(this.extractData)
										.catch(this.handleError);
	}
}
