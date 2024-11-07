// Angular modules
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Custom modules
import { SharedAntDesignModule } from '../../module/shared-ant-design/shared-ant-design.module';

// Interfaces
import ITodo from '../../models/todo';
import IUser from '../../models/user';

// Components
import TodoCardComponent from '../../components/todo-card/todo-card.component';
import AddTodoComponent from '../../components/add-todo/add-todo.component';

// Services
import { UserService } from '../../services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedAntDesignModule,
    TodoCardComponent,
    AddTodoComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Array<ITodo> = [];
  addTodoText: string = '';
  paramId: string = '';

  router = inject(Router);
  route = inject(ActivatedRoute);
  userService = inject(UserService);

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('userId');
    if (paramId) {
      this.paramId = paramId;
      let users = this.userService.getUsers();
      let foundUser = users.find((user) => user.id === parseInt(paramId));
      if (foundUser) {
        this.todos = foundUser.todos;
      } else {
        this.todos = [];
      }
    }
  }

  ngOnDestroy(): void {
    let updatedUsers: Array<IUser> = this.userService
      .getUsers()
      .map((user) =>
        user.id === parseInt(this.paramId)
          ? { ...user, todos: this.todos }
          : user
      );
    this.userService.setUsers(updatedUsers);
  }

  handleDeleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  handleAddTodo(text: string): void {
    let newTodo: ITodo = {
      id: Math.random(),
      title: text,
      completed: false,
    };
    this.todos.push(newTodo);
    this.addTodoText = '';
  }

  goBack(): void {
    this.router.navigate(['..']);
  }
}
