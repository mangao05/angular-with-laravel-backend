import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { TodoComponent } from './components/todo/todo/todo.component';



const routes: Routes = [
  {
    path: '',
    component : TodoComponent
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
