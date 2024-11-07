// Angular modules
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Custom modules
import { SharedAntDesignModule } from '../../module/shared-ant-design/shared-ant-design.module';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, SharedAntDesignModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export default class TodoCardComponent {
  @Input() todoTitle: string = '';
  @Input() todoId: number = 0;

  @Output() onDeleteTodo: EventEmitter<number> = new EventEmitter();
}
