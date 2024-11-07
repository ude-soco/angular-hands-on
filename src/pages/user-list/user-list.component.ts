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
  
  userService = inject(UserService);
  router = inject(Router);

  ngOnInit(): void {
    let userList = this.userService.getUsers();
    if (userList.length === 0) {
      this.userService.fetchUsers().subscribe((res) => {
        this.users = res;
        this.userService.setUsers(res);
      });
    } else {
      this.users = userList;
    }
  }

  onNavigateToUserTodo(routerName: string) {
    this.router.navigate([routerName]);
  }
}
