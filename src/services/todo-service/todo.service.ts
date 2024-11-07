import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TodoResponse from '../../models/response/todo-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  getUserTodos(userId: number): Observable<Array<TodoResponse>> {
    return this.http.get<Array<TodoResponse>>(
      `${environment.jsonPlaceholder}/${userId}/todos`
    );
  }
}
