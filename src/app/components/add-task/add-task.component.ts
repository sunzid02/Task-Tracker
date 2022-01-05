import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  taskName: string = '';
  day: string = '';
  reminder: false = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.taskName) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.taskName,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.taskName = '';
    this.day = '';
    this.reminder = false;

  }

}
