// Angular modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ant Design modules
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Interfaces
// * Task 2: Starts here

// * Task 2: Continues below (A)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // * Task 2: Continuation from (A)

  // * Task 2: Ends here

  // * Task 6: Start here

  // * Task 6: Continues to app.component.html (A)

  currentYear: number = new Date().getFullYear();
  
  openLink(url: string) {
    window.open(url, '_blank');
  }

  // * Task 4: Starts here

  // * Task 4: Continues to app.component.html (A)

  // * Task 7: Starts here

  // * Task 7: Continues to app.component.html (A)
}
