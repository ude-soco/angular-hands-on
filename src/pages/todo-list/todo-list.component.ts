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
import AddTodoComponent from '../../components/add-todo/add-todo.component';
import TodoCardComponent from '../../components/todo-card/todo-card.component';

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
    // * Task 4: Starts here
    AddTodoComponent,
    // * Task 4: Continues to todo-list.component.html (A)
    // * Task 6: Starts here
    TodoCardComponent,
    // * Task 6: Continues to todo-list.component.html (A)
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Array<ITodo> = [];
  addTodoText: string = '';
  paramId: string = '';

  router = inject(Router);
  // * Task 7: Starts here
  activatedRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  // * Task 7: Continues below (A)

  ngOnInit(): void {
    // * Task 7: Continues here (A)
    let paramId: string | null =
      this.activatedRoute.snapshot.paramMap.get('userId');
    if (paramId) {
      this.paramId = paramId;
      let users: Array<IUser> = this.userService.getUsers();
      let foundUser: IUser | undefined = users.find(
        (user: IUser) => user.id === parseInt(paramId)
      );
      if (foundUser) {
        this.todos = foundUser.todos;
      } else {
        this.todos = [];
      }
    }
    // * Task 7: Ends here
  }

  ngOnDestroy(): void {
    // * Task 8: Starts here
    let updatedUsers: Array<IUser> = this.userService
      .getUsers()
      .map((user: IUser) =>
        user.id === parseInt(this.paramId)
          ? { ...user, todos: this.todos }
          : user
      );
    this.userService.setUsers(updatedUsers);
    // * Task 8: Ends here
  }

  handleDeleteTodo(id: number): void {
    this.todos = this.todos.filter((todo: ITodo) => todo.id !== id);
  }

  handleAddTodo(text: string): void {
    let newTodo: ITodo = {
      id: Math.random(),
      title: text,
    };
    this.todos.push(newTodo);
    this.addTodoText = '';
  }

  goBack(): void {
    this.router.navigate(['..']);
  }
}
