import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Camp} from '../classes/camp';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CampService {
	camps = [
		'Coding',
		'Art',
		'Criminal Investigation',
		'Tourism',
		'Cilantro'
	];

	// private _campUrl = 'http://localhost:3000/api/camps/';
	private _campUrl = 'app/shared/camp.json';

	constructor(private http: Http) {}

	getCamp(id: number): Observable<Camp> {
		return this.http.get(this._campUrl)
										.map(this.extractData)
										.catch(this.handleError);
	}

	search(query: string): string[] {
		return this.camps.filter(c => {
			return  c.toLowerCase().startsWith(query.toLowerCase());
		});
	}

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    // return body.data || { };
    return body || { }; //for development purpose
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
