import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false; // !: means I am aware that value is not undefined or null
  private subject = new Subject<any>();


  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }


  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
