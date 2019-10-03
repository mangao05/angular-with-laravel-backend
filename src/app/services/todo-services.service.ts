import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  todosUrl:string = 'http://127.0.0.1:8000/api/todo';
  constructor( private http: HttpClient ) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  editTodo(todo : Todo):Observable<Todo>{
	const url = `${this.todosUrl}/${todo.id}/edit`;
	return this.http.get<Todo>(url);
  }
}
