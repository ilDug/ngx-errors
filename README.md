# ngx-errors

[![Publish Node.js Package](https://github.com/ilDug/ngx-errors/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-errors/actions/workflows/npm-publish.yml)
[![Build and Test](https://github.com/ilDug/ngx-errors/actions/workflows/build%20and%20test.yml/badge.svg)](https://github.com/ilDug/ngx-errors/actions/workflows/build%20and%20test.yml)

Form errors display directives for Angular.

Updated to Angular 16.

Inspired by [UltimateAngular/ngx-errors](https://github.com/UltimateAngular/ngx-errors)

try a [demo](https://ildug.github.io/ngx-errors/)

## Install

Install via package manager or fork this project ("projects/ngx-errors/src")

NPM 

```
npm install @ildug/ngx-errors
```

## Usage in angular app

Import the module in your angular app. In your module **app.module.ts**

``` typescript
    ...
    import { NgxErrorsModule } from '@ildug/ngx-errors';

    @NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            ...
            NgxErrorsModule,
            ...
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
```

### Form errors display

Add the directive to an element where errors will be diplayed.

**dagErrors** is the *name* of the reference input element.

**dagError** is the error name issued by  *Angular Validator* 

**when** indicates when the error message will be shown.

In **my.component.html**

``` html
<form >
    ...
    <div class="my-input-container">

        <input name="myinputname" type="email">

        <div dagErrors="myinputname" class="error" required >
            <div dagError="required" when="touched"> Please, insert a value</div>
            <div dagError="email" when="touched"> Ops, incorrect email format</div>
        </div>

    </div>
    ...
</form>
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
