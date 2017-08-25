// core libraries
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import environemnt variables
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  private eventApiUrl = `${environment.apiUrl}/authentication`;
  private accessToken: string;
  private reqOptions: RequestOptions;

  constructor( private http: Http ) {
    // set the access token
    const HEADERS = new Headers({ 'x-access-token': this.accessToken, 'content-type': 'application/json'});
    this.reqOptions = new RequestOptions({ headers: HEADERS });
  }

  login (email: string, password: string): Promise<boolean> {
    // post the event to the api
    return this.http.post( this.eventApiUrl, {email: email, password: password}, this.reqOptions)
                    .toPromise()
                    .then(response => {
                      if (response.json().success && response.json().token) {
                        console.log('login successful');
                        this.accessToken = response.json().token;
                        localStorage.setItem('accessToken', this.accessToken);
                        return true;
                      } else {
                        console.log('login failed');
                        return false
                      }
                    })
                    .catch(this.handleError);
  }

  logout () {
    this.accessToken = null;
    localStorage.removeItem('accessToken');
  }

  // I would definitely want to handle errors better in a real world situation
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // log error to console
    return Promise.reject(error.message || error);
  }

}
