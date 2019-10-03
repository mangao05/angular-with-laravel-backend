import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoEditComponent } from './components/todo/todo-edit/todo-edit.component';
import { EditTodoModalComponent } from './components/todo/modal/edit-todo-modal/edit-todo-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoItemComponent,
    TodoEditComponent,
    EditTodoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
