import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const antDesignComponents = [
  NzButtonModule,
  NzDividerModule,
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzIconModule,
];

@NgModule({
  declarations: [],
  imports: antDesignComponents,
  exports: antDesignComponents,
})
export class SharedAntDesignModule {}
