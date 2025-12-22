import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from './todo.service';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<TodoItem>();


  constructor(private todoService: TodoService) { }

  deleteItem(): void {
    this.delete.emit(this.item.id);
  }

  updateItem(): void {
    console.log('Update Item');
    this.update.emit(this.item);
  }
}
