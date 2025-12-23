import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { TodoItemComponent } from './todo-item.component';

import { TodoService } from './todo.service';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HttpClientModule, RouterOutlet, CommonModule, TodoItemComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('ToDoApp');

  todos = signal<TodoItem[]>([]);

  addingItem: string = '';

  error: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: items => {
        this.todos.set(items);
      },
      error: (err: HttpErrorResponse) => {
        this.displayError(err);
      }
    });
  }

  addItem() {
    this.todoService.addItem(this.addingItem).subscribe({
      next: item => {
      this.todos.update(current => [...current, item]);
      this.addingItem = '';
    },
      error: (err: HttpErrorResponse) => {
        this.displayError(err);
      }
    });
  }

  updateItem(item: TodoItem) {
    this.todoService.updateItem(item).subscribe({
      next: updated => {
        
      },
      error: (err: HttpErrorResponse) => {
        this.displayError(err);
      }
    });
  }

  disableAddItem(): boolean {
    return !this.addingItem.trim();
  }

  deleteIndividualItem(id: string): void {
    this.todoService.deleteItem(id).subscribe({
      next: () => {
        this.todos.update(current => current.filter(todo => todo.id !== id));
      },
      error: (err: HttpErrorResponse) => {
        this.displayError(err);
      }
    });
  }

deleteAllDoneItems(): void {
  this.todoService.deleteDoneItems().subscribe({
    next: items => {
      this.todos.set(items);
    },
    error: (err: HttpErrorResponse) => {
      this.displayError(err);
    }
  });
  }

  displayError(err: unknown): void {
    console.error('Error object:', err);

    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        this.error = 'Unable to connect to the server..';
      } else if (err.status === 404) {
        this.error = 'The requested resource was not found.';
      } else if (err.status === 500) {
        this.error = 'A server error occurred.';
      } else {
        this.error = `Unexpected error (${err.status}): ${err.statusText}`;
      }
    } else {
      this.error = 'An unknown error occurred.';
    }
  }

}
