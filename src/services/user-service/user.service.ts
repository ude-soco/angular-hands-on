import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TodoService } from '../todo-service/todo.service';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import IUser from '../../models/user';
import UserResponse from '../../models/response/user-response';
import TodoResponse from '../../models/response/todo-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<IUser> = [];

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
                  completed: todo.completed,
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
