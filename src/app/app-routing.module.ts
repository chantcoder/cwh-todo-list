import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { NotebookComponent } from './MyComponent/notebook/notebook.component';
import { ReactiveLoginFormComponent } from './MyComponent/reactive-login-form/reactive-login-form.component';
import { TodosComponent } from './MyComponent/todos/todos.component';


const routes: Routes = [
  {path:'',component:TodosComponent},
  {path:'',component:AddTodoComponent},
  {path:'about',component:AboutComponent},
  {path:'notebook',component:NotebookComponent},
  {path:'reactiveLoginForm',component:ReactiveLoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
