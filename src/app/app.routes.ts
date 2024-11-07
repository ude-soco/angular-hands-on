import { Routes } from '@angular/router';
import { UserListComponent } from '../pages/user-list/user-list.component';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:userId', component: TodoListComponent },
  { path: '**', redirectTo: '' },
];
