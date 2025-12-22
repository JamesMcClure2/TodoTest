import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoItem } from './todoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://localhost:7054/api/ToDo/';

  private getAllUrl = this.apiUrl + 'GetToDoItems';
  private addItemUrl = this.apiUrl + 'AddItem';
  private updateItemUrl = this.apiUrl + 'UpdateItem';
  private deleteItemUrl = this.apiUrl + 'DeleteItem';
  private deleteDoneUrl = this.apiUrl + 'DeleteAllDone';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.getAllUrl);
  }

  addItem(title: string): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.addItemUrl, {title});
  }

  updateItem(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.updateItemUrl, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(this.deleteItemUrl + '?id=' + id);
  }

  deleteDoneItems(): Observable<TodoItem[]> {
    return this.http.delete<TodoItem[]>(this.deleteDoneUrl);
  }
}
