import { AfterViewInit, DestroyRef, Directive, computed, inject, input } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { Subject, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
    selector: '[dagErrors]',
    standalone: true,
})
export class NgxErrorsDirective implements AfterViewInit {
    form = inject(FormGroupDirective);
    destroyRef = inject(DestroyRef)

    controlName = input.required<string>({ alias: 'dagErrors' });
    control = computed<AbstractControl<any, any>>(() => this.form.control.get(this.controlName()));
    events$ = new Subject<any>();

    ngAfterViewInit(): void {
        // emette l'errore iniziale se presente
        this.events$.next(this.control().errors);

        // emette tutti gli eventi del control (valueChanges, statusChanges, ecc)
        this.control().events
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                distinctUntilChanged(),
            )
            .subscribe(e => this.events$.next(e) )
    }

}