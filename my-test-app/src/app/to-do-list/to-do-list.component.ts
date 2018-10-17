import { Component, OnInit } from '@angular/core';

import {Todo} from '../todo.model'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
allTodos: Todo[] = [
 {description: 'Task1', complete:false, id: 1 },
 {description: 'Task2', complete:true, id: 2 },
 {description: 'Task3', complete:true, id: 3 },
];

newTask = '';

clickAddTask()
{
  const currentLength = this.allTodos.length;
  this.allTodos.push(
    {description: this.newTask, complete: false, id: currentLength +1}
  );
}

  constructor() { }

  ngOnInit() {
  }

}
