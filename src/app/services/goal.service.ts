// core libraries
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import models
import { Goal } from '../models/goal';

// import environemnt variables
import { environment } from '../../environments/environment';

@Injectable()
export class GoalService {

  private goalApiUrl = `${environment.apiUrl}/goal`;
  private accessToken = localStorage.getItem('accessToken');
  private reqOptions: RequestOptions;
  private localGoals: Goal[];
  private goals = new BehaviorSubject<Goal[]>([]);
  goals$ = this.goals.asObservable();

  constructor( private http: Http ) {
    // set the access token
    const HEADERS = new Headers({ 'x-access-token': this.accessToken, 'content-type': 'application/json'});
    this.reqOptions = new RequestOptions({ headers: HEADERS });
  }


  // get all active goals for this user
  getActive(): Promise<Goal[]> {
    return this.http.get(this.goalApiUrl, this.reqOptions)
      .toPromise()
      .then( response => {
        this.localGoals = response.json() as Goal[];
        this.goals.next( this.localGoals );
      })
      .catch(this.handleError);
  }

  // create event action
  save(goal: Goal): Promise<Goal> {
    return this.http.post( `${this.goalApiUrl}`, JSON.stringify(goal), this.reqOptions )
                    .toPromise()
                    .then(response => {
                      this.localGoals.push(response.json() as Goal);
                      this.goals.next(this.localGoals);
                    })
                    .catch(this.handleError);
  }

  // set the progress level of a given goal
  setProgress (goal: Goal ): Promise<boolean> {
    return this.http.put( `${this.goalApiUrl}/${goal._id}/set-progress`, {progress: goal.progress}, this.reqOptions)
      .toPromise()
      .then( response => {
        if ( response.status === 204 ) {
          return true;
        }
        return false;
      });
  }

  // delete goal
   delete (goal: Goal): Promise<boolean> {
     return this.http.delete(`${this.goalApiUrl}/${goal._id}`, this.reqOptions)
      .toPromise()
      .then( response => {
        if ( response.status === 204 ) {
          this.localGoals.splice(this.localGoals.indexOf(goal), 1);
          this.goals.next(this.localGoals);
          return true;
        }
        return false;
      });
   }

  // I would definitely want to handle errors better in a real world situation
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // log error to console
    return Promise.reject(error.message || error);
  }

}
