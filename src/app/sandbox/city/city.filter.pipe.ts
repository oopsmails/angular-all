import { Pipe, PipeTransform } from '@angular/core';
import { UsCity } from 'src/app/shared/models';

@Pipe({
  name: 'CityFilterPipe',
})
export class CityFilterPipe implements PipeTransform {
  transform(value: UsCity[], input: any): any {
    if (input) {
      // return value.filter((usCity: UsCity) => usCity.cityName.toLowerCase().indexOf(input.toLowerCase()) >= 0);
      return value.filter((usCity: UsCity) =>
        usCity.cityName.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      return value;
    }
  }
}
