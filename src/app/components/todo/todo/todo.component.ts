import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './../../../models/Todo';
import { TodoServicesService } from './../../../services/todo-services.service';
import { EditTodoModalComponent } from './../modal/edit-todo-modal/edit-todo-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  @ViewChild(EditTodoModalComponent, {static :true}) md:EditTodoModalComponent;
  constructor(private todoService: TodoServicesService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      	this.todos = todos
    })
  }

  editTodo(todo){
	  this.md.open('content');
	//   this.todoService.editTodo(todo).subscribe((todo) => {
	// 	  console.log(todo);
	//   });
  }
}
