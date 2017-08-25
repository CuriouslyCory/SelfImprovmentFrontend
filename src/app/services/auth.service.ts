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

  constructor( private http: Http ) { }

  login (email: string, password: string): Promise<boolean> {
    // post the event to the api
    return this.http.post( `${this.eventApiUrl}`, JSON.stringify({email: email, password: password}))
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

  // I would definitely want to handle errors better in a real world situation
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // log error to console
    return Promise.reject(error.message || error);
  }

}
