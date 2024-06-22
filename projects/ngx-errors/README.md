# ngx-errors

[![Publish Node.js Package](https://github.com/ilDug/ngx-errors/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-errors/actions/workflows/npm-publish.yml)
[![Build and Test](https://github.com/ilDug/ngx-errors/actions/workflows/build%20and%20test.yml/badge.svg)](https://github.com/ilDug/ngx-errors/actions/workflows/build%20and%20test.yml)

Form errors display directives for Angular.

Updated to Angular 18.

try a [demo](https://ildug.github.io/ngx-errors/)

## Install

Install via package manager or fork this project ("projects/ngx-errors/src")

NPM 

```
npm install @ildug/ngx-errors
```

## Usage in angular app

Import the module in your angular component. In your module **app.module.ts**

``` typescript
    ...
@Component({
    ...,
    standalone: true,
    imports: [..., ReactiveFormsModule, NgxErrorsModule],
    ...
})
export class AppComponent {
    form = new FormGroup({
        "email": new FormControl(null, [Validators.required, Validators.email])
    });
}

```

### Form errors display

Add the directive to an element where errors will be diplayed.

**dagErrors** is the *name* of the reference input element.

**dagError** is the error name issued by  *Angular Validator* 

**when** indicates when the error message will be shown.

In **my.component.html**

``` html
<form [formGroup]="form" >
    ...
    <div class="my-input-container">

        <input type="email" formControlName="email">

        <div dagErrors="email" class="error">
            <div dagError="required" when="touched"> Please, insert a value</div>
            <div dagError="email" when="touched"> Ops, incorrect email format</div>
            <div dagError="otherError" [when]="[dirty, pristine]"> always show this message when otherError is present</div>
        </div>

    </div>
    ...
</form>
```

