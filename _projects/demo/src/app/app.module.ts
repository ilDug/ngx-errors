import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxErrorsModule } from 'projects/ngx-errors/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgxErrorsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
