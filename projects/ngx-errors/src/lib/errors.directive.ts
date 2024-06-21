import { Directive, Input, computed, inject, input, signal } from '@angular/core';
import { ErrorDetails, ErrorOptions, toArray } from './dag-errors.types';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Directive({
    selector: '[dagErrors]',
    standalone: true
})
export class NgxErrorsDirective {
    form = inject(FormGroupDirective);
    
    controlName = input.required<string>({ alias: 'dagErrors' });
    control = computed<AbstractControl<any, any>>(() => this.form.control.get(this.controlName()));
    
    errors = computed(() => this.control().errors);
    hasErrors = computed(() => !!this.errors());

    // subject = new BehaviorSubject<ErrorDetails>(null);
    // ready = signal(false);


    // get errors() { if (!this.ready) return; return this.control.errors; }
    // get hasErrors() { return !!this.errors; }


    // private checkStatus() {
    //     const control = this.control;
    //     const errors = control.errors;
    //     this.ready = true;
    //     if (!errors) return;
    //     for (const errorName in errors) {
    //         this.subject.next({ control, errorName });
    //     }
    // }

    // ngAfterViewInit() {
    //     setTimeout(() => {
    //         this.checkStatus();
    //         this.control.statusChanges.subscribe(this.checkStatus.bind(this));
    //     });
    // }


    // ngOnDestroy() {
    //     this.subject.unsubscribe();
    // }


    // hasError(name: string, conditions: ErrorOptions): boolean {
    //     return this.checkPropState("invalid", name, conditions);
    // }



    // isValid(name: string, conditions: ErrorOptions): boolean {
    //     return this.checkPropState("valid", name, conditions);
    // }



    // getError(name: string) {
    //     if (!this.ready) return;
    //     return this.control.getError(name);
    // }



    // private checkPropState(prop: string, name: string, conditions: ErrorOptions): boolean {
    //     if (!this.ready) return;

    //     const controlPropsState = !conditions || toArray(conditions).every((condition: string) => this.control[condition]);
    //     if (name.charAt(0) === "*") {
    //         return this.control[prop] && controlPropsState;
    //     }

    //     return prop === "valid"
    //         ? !this.control.hasError(name)
    //         : this.control.hasError(name) && controlPropsState;
    // }




}
