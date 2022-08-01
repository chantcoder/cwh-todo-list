import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { NavigationComponent } from './MyComponent/navigation/navigation.component';
import { LeftNavigationComponent } from './MyComponent/left-navigation/left-navigation.component';
import { MainContentComponent } from './MyComponent/main-content/main-content.component';
import { AsideComponent } from './MyComponent/aside/aside.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { NotebookComponent } from './MyComponent/notebook/notebook.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ReactiveFormsModule  } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavigationComponent,
    LeftNavigationComponent,
    MainContentComponent,
    AsideComponent,
    FooterComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    NotebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
