import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    form: FormGroup;

    ngOnInit() {
        const controls = {
            "email": new FormControl(null, [Validators.required, Validators.email])
        }
        this.form = new FormGroup(controls);
    }
}
