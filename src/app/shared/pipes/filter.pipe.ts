import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], docType: string): any {
        if (!items || !docType) {
            return items;
        }
        return items.filter(elem => {
            if (elem.type === docType) {
                return elem;
            }
        });
    }
}
