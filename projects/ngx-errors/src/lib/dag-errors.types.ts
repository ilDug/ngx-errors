import { AbstractControl } from '@angular/forms';

export type ErrorOptions = string | string[];

export interface ErrorDetails {
    control: AbstractControl,
    errorName: string
}

export const toArray = (value: ErrorOptions): string[] => Array.isArray(value) ? value : [value];