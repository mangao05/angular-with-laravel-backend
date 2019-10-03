import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // Input is equivalent of props, set the variable name first and import the model
  @Input() todo: Todo; 
  constructor() { }

  ngOnInit() {
  }

}
