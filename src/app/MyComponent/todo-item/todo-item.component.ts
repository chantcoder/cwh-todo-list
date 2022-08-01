import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.todoDelete.emit(this.todo);
    console.log("onclick delete has been triggered");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(this.todo);
    console.log("oncheck box click triggered.");
  }
}
