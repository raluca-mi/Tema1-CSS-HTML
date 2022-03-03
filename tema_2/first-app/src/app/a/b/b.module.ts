import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcComponent } from './bc/bc.component';
import { CModule } from './c/c.module';
import { CcComponent } from './c/cc/cc.component';



@NgModule({
  declarations: [
    BcComponent
  ],
  imports: [
    CommonModule,
    CModule
  ],
  exports: [
    BcComponent,
    CcComponent
  ]
})
export class BModule { }
