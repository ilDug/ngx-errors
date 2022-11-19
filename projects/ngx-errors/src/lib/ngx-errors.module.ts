import { NgModule } from '@angular/core';
import { NgxErrorsDirective } from './errors.directive';
import { NgxErrorDirective } from './error.directive';
import { CommonModule } from '@angular/common'



@NgModule({
    declarations: [
        NgxErrorsDirective,
        NgxErrorDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NgxErrorsDirective,
        NgxErrorDirective
    ]
})
export class NgxErrorsModule { }
