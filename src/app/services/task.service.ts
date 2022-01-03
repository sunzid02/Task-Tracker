import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {

    // const tasks = of(TASKS); //convert direclty to observable

    return this.http.get<Task[]>(this.apiUrl);
  }
}
