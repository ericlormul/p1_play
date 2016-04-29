import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

	constructor(private http: Http) {}

	sign_up(person: any) {
		let body = JSON.stringify({person: person});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post('api/'+'signup.json', body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	sign_in(email: string, password: string) {
		let headers = new Headers({ 'Authorization': 'Basic '+window.btoa(email+':'+password)});
		let options = new RequestOptions({ headers: headers });

		return this.http.get('api/'+'authentication.json', options)
			.map(this.extractData)
			.catch(this.handleError);
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
