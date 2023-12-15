import { DecimalPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'localNumber',
    standalone: true,
})
export class LocalNumberPipe implements PipeTransform {
    private persian_digits: { [key: string]: string } = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
    };

    constructor(@Inject(LOCALE_ID) private locale_id: string) {
        if (!locale_id.startsWith('fa')) {
            throw Error('Only locale "fa-IR" is supported');
        }
    }

    transform(
        value: number | string,
        digitsInfo?: string,
        locale?: string
    ): string | null;
    transform(
        value: null | undefined,
        digitsInfo?: string,
        locale?: string
    ): null;
    transform(
        value: number | string | null | undefined,
        digitsInfo?: string,
        locale?: string
    ): string | null {
        const decimalPipe = new DecimalPipe(this.locale_id);
        const numberString = decimalPipe.transform(value, digitsInfo, locale);

        if (numberString === null) return null;

        return numberString.replace(
            /[0-9]/g,
            (match) => this.persian_digits[match]
        );
    }
}
