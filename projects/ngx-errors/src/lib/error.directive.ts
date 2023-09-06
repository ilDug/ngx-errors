import { Directive, DoCheck, forwardRef, HostBinding, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ErrorOptions, toArray } from './dag-errors.types';
import { NgxErrorsDirective } from './errors.directive';
import { Subscription, Subject, Observable, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators'

@Directive({
    selector: '[dagError]'
})
export class NgxErrorDirective implements OnInit, DoCheck, OnDestroy {

    @Input() set dagError(value: ErrorOptions) { this.errorNames = toArray(value); }
    @Input() set when(value: ErrorOptions) { this.rules = toArray(value); }
    @HostBinding("hidden") hidden: boolean = true;

    rules: string[] = [];
    errorNames: string[] = [];
    subscription: Subscription;
    _states: Subject<string[]>;
    states: Observable<string[]>;


    constructor(@Inject(forwardRef(() => NgxErrorsDirective)) private dagErrors: NgxErrorsDirective) { }


    ngOnInit() {
        this._states = new Subject<string[]>();
        this.states = this._states
            .asObservable()
            .pipe(distinctUntilChanged());

        const errors = this.dagErrors.subject.pipe(
            filter(Boolean),
            filter((obj: any) => !!~this.errorNames.indexOf(obj.errorName))
        )

        const states = this.states.pipe(
            map(states => this.rules.every(rule => !!~states.indexOf(rule)))
        )

        this.subscription = combineLatest([states, errors])
            .subscribe(([states, errors]) => {
                this.hidden = !(states && errors.control.hasError(errors.errorName));
            });
    }




    ngDoCheck() {
        this._states.next(
            this.rules.filter(rule => (this.dagErrors.control as any)[rule])
        );
    }




    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
