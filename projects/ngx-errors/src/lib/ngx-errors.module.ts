import { NgModule } from '@angular/core';
import { NgxErrorsDirective } from './errors.directive';
import { NgxErrorDirective } from './error.directive';

@NgModule({
    imports: [
        NgxErrorsDirective,
        NgxErrorDirective
    ],
    exports: [
        NgxErrorsDirective,
        NgxErrorDirective
    ]
})
export class NgxErrorsModule { }
