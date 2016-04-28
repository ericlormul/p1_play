import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
//for future post request
// import {Headers, RequestOptions} from 'angular2/http';
import {Camp} from '../classes/camp';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class CampService {
	// private _campUrl = 'app/shared/camp.json';
	private _searchCampUrl = 'app/shared/camps.json';

	private _campApi = 'api/camps/';

	constructor(private http: Http) {}

	//mock get
	// getCamp(id: number): Observable<Camp> {
	// 	return this.http.get(this._campUrl)
	// 									.map(this.extractData)
	// 									.catch(this.handleError);
	// }

	getCamp(id: number): Observable<Camp> {
		return this.http.get(this._campApi + id + '.json')
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
		// return this.http.get(this._campApi + 'search/' + this.format_full_text_query(query) + '.json')
		return this.http.get(this._searchCampUrl)
										.map(this.extractData)
										.catch(this.handleError);
	}

	get_by_category(category: string): Observable<Camp[]> {
		return this.http.get(this._campApi + 'category/' + category + '.json')
										.map(this.extractData)
										.catch(this.handleError);
	}

	private format_full_text_query(raw_query: string) {
		return raw_query.trim().replace(/ +/, '+').toLowerCase();
	}

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { }; //for development purpose
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
