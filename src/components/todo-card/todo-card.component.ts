// Angular modules
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Custom modules
import { SharedAntDesignModule } from '../../module/shared-ant-design/shared-ant-design.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedAntDesignModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export default class TodoCardComponent {
  // * Task 5: Starts here

  
  // * Task 5: Continues to todo-card.component.html (A)
}
