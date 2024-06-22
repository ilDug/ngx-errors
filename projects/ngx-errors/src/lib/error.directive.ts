import { AfterViewInit, DestroyRef, Directive, forwardRef, inject, input, signal } from '@angular/core';
import { toArray } from './dag-errors.types';
import { NgxErrorsDirective } from './errors.directive';
import { map } from 'rxjs/operators'

@Directive({
    selector: '[dagError]',
    standalone: true,
    host: {
        '[hidden]': 'hidden()'
    }
})
export class NgxErrorDirective implements AfterViewInit {

    on = input.required<string>({ alias: 'dagError' });
    when = input<string | string[]>(['pristine', 'dirty']);
    hidden = signal(true);

    private parent = inject<NgxErrorsDirective>(forwardRef(() => NgxErrorsDirective));

    ngAfterViewInit(): void {

        this.parent.events$
            .pipe(
                map(event => this.parent.control().errors),
                map(errors => errors && errors[this.on()]),
                map(hasError => hasError &&
                    toArray(this.when()).some(w => this.parent.control()[w])
                ),
            )
            .subscribe(show => this.hidden.set(!show))

    }

}
