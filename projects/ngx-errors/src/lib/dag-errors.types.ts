import { AbstractControl } from '@angular/forms';

export type ErrorOptions = string | string[];

export interface ErrorDetails {
    control: AbstractControl,
    errorName: string
}

export const toArray = (value: string | string[] ): string[] => Array.isArray(value) ? value : [value];


export  const DagErrorsControlStates = ['touched', 'untouched', 'pristine', 'dirty'];
export type DagErrorsControlState = 'touched' | 'untouched' | 'pristine' | 'dirty';