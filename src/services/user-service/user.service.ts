// Angular modules
import { Injectable, inject } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

// Interfaces
import IUser from '../../models/user';
import UserResponse from '../../models/response/user-response';
import TodoResponse from '../../models/response/todo-response';

// Services
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../todo-service/todo.service';

// Environment
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<IUser> = [];

  http = inject(HttpClient);
  todoService = inject(TodoService);

  fetchUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(environment.reqRes).pipe(
      switchMap((response: any) => {
        const users: Array<UserResponse> = response.data;
        const usersWithTodos: Array<Observable<IUser>> = users.map(
          (user: UserResponse) => {
            return this.todoService.getUserTodos(user.id).pipe(
              map((todos: Array<TodoResponse>) => ({
                id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                email: user.email,
                avatar: user.avatar,
                todos: todos.map((todo: TodoResponse) => ({
                  id: todo.id,
                  title: todo.title,
                })),
              }))
            );
          }
        );
        return forkJoin(usersWithTodos);
      })
    );
  }

  getUsers(): Array<IUser> {
    return this.users;
  }

  setUsers(userList: Array<IUser>): void {
    this.users = userList;
  }
}
