import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPetType'
})
export class FilterByPetTypePipe implements PipeTransform {

  transform(petsList: any, petType): unknown {
    let filteredList;
    filteredList= petsList.filter(pet=>{
      return pet.type== petType;
    })
    return filteredList;
  }

}
