import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export abstract class APIService {

	constructor(protected http: Http) {}

	getUrl(request: string):string {
		return 'api/'+ request + '.json';
	}

  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { }; //for development purpose
  }

  handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
