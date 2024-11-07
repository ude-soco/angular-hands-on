// Angular modules
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import TodoResponse from '../../models/response/todo-response';

// Services
import { HttpClient } from '@angular/common/http';

// Environment
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
