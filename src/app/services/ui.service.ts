import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false; // !: means I am aware that value is not undefined or null
  
  /**
   * Subject is one kind of Observable. 
   * It takes the notifications from a single, 
   * source observable abd forwarding
   * them to one or more destination observers
   */
  private subject = new Subject<any>();


  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  /**
   * After clicking Add button, toggleAddTask() will be called
   * and whereever we want to do something when that happens we want to
   * subscribe to onToggle()
   * 
   */
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
