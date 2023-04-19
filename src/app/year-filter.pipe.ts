import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {
  transform(dateString: string): string {
    if (!dateString) {
      return '';
    }

    // Extract year from the date string
    const year = new Date(dateString).getFullYear().toString();

    return year;
  }
}
