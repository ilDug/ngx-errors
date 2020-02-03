import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxErrorsDirective } from './errors.directive';
import { NgxErrorDirective } from './error.directive';



@NgModule({
  declarations: [ NgxErrorsDirective, NgxErrorDirective],
  imports: [
      CommonModule
  ],
  exports: [NgxErrorsDirective, NgxErrorDirective]
})
export class NgxErrorsModule { }
