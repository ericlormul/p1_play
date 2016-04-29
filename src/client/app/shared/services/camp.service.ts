import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
//for future post request
// import {Headers, RequestOptions} from 'angular2/http';
import {Camp} from '../classes/camp';
import {Observable}     from 'rxjs/Observable';
import { APIService } from '../index';


@Injectable()
export class CampService extends APIService {
	// private _campUrl = 'app/shared/camp.json';
	// private _searchCampUrl = 'app/shared/camps.json';

	private _campApi = 'camps/';

	constructor(http: Http) {
		super(http);
	}

	//mock get
	// getCamp(id: number): Observable<Camp> {
	// 	return this.http.get(this._campUrl)
	// 									.map(this.extractData)
	// 									.catch(this.handleError);
	// }

	getCamp(id: number): Observable<Camp> {
		return this.http.get(this.getUrl(this._campApi + id))
										.map(this.extractData)
										.catch(this.handleError);
	}

	//mock search
	// search(query: string): Observable<Camp[]> {
	// 	return this.http.get(this._searchCampUrl)
	// 									.map(this.extractData)
	// 									.catch(this.handleError);
	// }

	search(query: string): Observable<Camp[]> {
		return this.http.get(this.getUrl(this._campApi + 'search/' + this.format_full_text_query(query)))
		// return this.http.get(this._searchCampUrl)
										.map(this.extractData)
										.catch(this.handleError);
	}

	get_by_category(category: string): Observable<Camp[]> {
		return this.http.get(this.getUrl(this._campApi + 'category/' + category))
										.map(this.extractData)
										.catch(this.handleError);
	}

	private format_full_text_query(raw_query: string) {
		return raw_query.trim().replace(/ +/, '+').toLowerCase();
	}

}
