// Angular modules
import { Component } from '@angular/core';

// Custom modules
import { SharedAntDesignModule } from '../module/shared-ant-design/shared-ant-design.module';

// Components
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedAntDesignModule,
    NavigationBarComponent,
    TodoListComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
