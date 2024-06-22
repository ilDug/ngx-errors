import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxErrorsModule } from 'ngx-errors';

@Component({
    selector: 'demo-root',
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, JsonPipe, NgxErrorsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    form = new FormGroup({
        "email": new FormControl(null, [Validators.required, Validators.email])
    });
}
