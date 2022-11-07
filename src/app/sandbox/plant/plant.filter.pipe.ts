import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PlantFilterPipe'
})
export class PlantFilterPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    console.log(`PlantFilterPipe: `, searchText);

    return items.filter(
      (x) =>
        searchText == null ||
        searchText == '' ||
        x?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
        x?.scientific_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
        x?.family?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }

}
