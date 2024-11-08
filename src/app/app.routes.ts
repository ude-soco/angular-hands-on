import { Routes } from '@angular/router';
import { UserListComponent } from '../pages/user-list/user-list.component';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';

export const routes: Routes = [
  // * Task 1: Starts here
  { path: '', component: UserListComponent },
  { path: 'users/:userId', component: TodoListComponent },
  { path: '**', redirectTo: '' },
  // * Task 1: Continues to app.component.ts (A)
];
