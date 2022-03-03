import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcComponent } from './ac/ac.component';
import { BModule } from './b/b.module';
import { BcComponent } from './b/bc/bc.component';
import { CcComponent } from './b/c/cc/cc.component';



@NgModule({
  declarations: [
    AcComponent
  ],
  imports: [
    CommonModule,
    BModule
  ],
  exports: [
    AcComponent,
    BcComponent,
    CcComponent
  ]
})
export class AModule { }
