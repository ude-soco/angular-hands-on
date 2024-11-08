// Angular modules
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { SharedAntDesignModule } from '../../module/shared-ant-design/shared-ant-design.module';

// Interfaces
import IUser from '../../models/user';

// Services
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, SharedAntDesignModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: Array<IUser> = [];

  // * Task 2: Starts here
  
  
  // * Task 2: Continues below (A)
  router = inject(Router);

  ngOnInit(): void {
    // * Task 2: Continues from here (A)

    
    // * Task 2: Ends here
  }

  onNavigateToUserTodo(routerName: string) {
    this.router.navigate([routerName]);
  }
}
