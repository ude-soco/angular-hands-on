// Angular modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Custom modules
import { SharedAntDesignModule } from '../../module/shared-ant-design/shared-ant-design.module';

// Interfaces
import TodoDetails from '../../models/todos';

// Components
import TodoCardComponent from '../../components/todo-card/todo-card.component';
import AddTodoComponent from '../../components/add-todo/add-todo.component';

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
export class TodoListComponent {
  todos: Array<TodoDetails> = [
    { id: 1, task: 'Prepare the drafts of the slides' },
    { id: 2, task: 'Prepare hands-on tasks' },
    { id: 3, task: 'Practice speaking' },
    { id: 4, task: 'Check if the demo is working' },
    { id: 5, task: 'Solve issues posted by others' },
  ];

  addTodoText: string = '';

  handleDeleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  handleAddTodo = (text: string) => {
    let newTodo: TodoDetails = { id: Math.random(), task: text };
    this.todos.push(newTodo);
    this.addTodoText = '';
  };
}
