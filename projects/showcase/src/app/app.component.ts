import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dag-root',
  templateUrl:'./app.component.html',
  styles: [
      `.error{color:red;}`
  ]
})
export class AppComponent {
  form: FormGroup;

  ngOnInit(){
      const controls = {
          "email": new FormControl(null, [Validators.required, Validators.email])
      }
      this.form = new FormGroup(controls);
  }
}
