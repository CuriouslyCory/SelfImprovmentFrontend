import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import * as moment from 'moment';
import { Goals, Tallies } from 'api/collections';
import { Goal, Tally } from 'api/models';
 
@Injectable()
export class GoalService{
  
  goals: any;
  
  constructor() {
    this.subscribeToPubs();
  }
  
  findGoals(): Observable<Goal[]> {
    return Goals.find().map((goals: Goal[]) => {
      goals.forEach( (goal: Goal) => {
        //subscribe to each of the tally groups
        
        
        // find all the tallies from the current recurrence
        let selector = { goalId: goal._id, year: +moment().format("YYYY") };
        if (goal.recurrence === 'day') { 
          selector['day'] = +moment().format("DDD");
        }else if (goal.recurrence === 'week') { 
          selector['week'] = +moment().format("W");
        }else if (goal.recurrence === 'month') { 
          selector['month'] = +moment().format("M");
        }
      
        // itterate through all of the tallies and create a total for the current time period
        this.getTallies(goal._id, selector)
        .subscribe((progress: number) => {
          goal.progress = progress;
        });
      });
      return goals;
    });
  }
  
  getTallies ( goalId: string, selector: object ): Observable<number> {
    return Observable.create((observer: Subscriber<number>) => {
      const goalExists = () => !!Goals.findOne({_id: goalId});
      // Re-compute until goal is removed
      MeteorObservable.autorun().takeWhile(goalExists).subscribe(() => {
        Tallies.find(selector).subscribe({
          next: (tallies: Tally[]) => {
            // if no tallies are found return zero
            if (!tallies ) {
              console.log(`no tallies found for: ${goalId}`)
              observer.next(0);
            }
            
            // calculate the value of the total tallies
            let currentTally = 0;
            tallies.forEach((tally: Tally) => {
              currentTally += tally.value;
            });
            observer.next(currentTally);
          },
          error: (e) => {
            observer.error(e);
          },
          complete: () => {
            observer.complete();
          }
        }); 
      });
    });
  }
  
  subscribeToPubs() {
    MeteorObservable.subscribe('tallies').subscribe(() => {
      console.log('Tallies Sub Ready');
    });
    
    MeteorObservable.subscribe('goals').subscribe(() => {
      console.log("Goals Sub Ready");
    });
  }

}


 