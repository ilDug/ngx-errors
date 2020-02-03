# ngx-errors
Form errors display directives for Angular.

Inspired by [UltimateAngular/ngx-errors](https://github.com/UltimateAngular/ngx-errors)

## Install

Install via package manager or fork this project ("projects/ngx-errors/src")

NPM 

```
npm install @ildug/ngx-errors
```
YARN 

```
yarn add @ildug/ngx-errors
```

## Usage in angular app

Import the module in your angular app. In your module **app.module.ts**

``` typescript
    ...
    import { NgxDragdropModule } from '@ildug/ngx-dragdrop';

    @NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            ...
            NgxDragdropModule,
            ...
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
```

### dagDrag

Add the directive to an element to give it the *draggable* behaviour. Then assign a value to an element witch will be dragged.


In **my.component.html**

``` html
<div [dagDrag]="item" > drag me </div>
```
