import { Component, OnInit } from '@angular/core';
import { Todo } from './../../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Washing Plates',
        completed: false
      },
      {
        id: 2,
        title: 'Training Angular',
        completed: false
      },
      {
        id: 3,
        title: 'Going to sleep',
        completed: false
      }
    ]
  }

}
