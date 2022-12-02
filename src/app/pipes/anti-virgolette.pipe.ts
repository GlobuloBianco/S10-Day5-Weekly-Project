import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'antiVirgolette'
})
export class AntiVirgolettePipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): unknown {
        let trim = value.slice(1);
        let result = trim.slice(0, -1);
        return result;
    }

}
