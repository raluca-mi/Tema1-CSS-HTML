import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcComponent } from './cc/cc.component';



@NgModule({
  declarations: [
    CcComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CcComponent
  ]
})
export class CModule { }
