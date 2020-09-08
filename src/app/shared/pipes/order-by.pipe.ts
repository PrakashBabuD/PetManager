import { Pipe, PipeTransform } from '@angular/core';

enum SortDirection{
  ASC="asc",
  DESC="desc"
};
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[], sortDirection,sortProperty) {
     if(sortDirection==SortDirection.ASC){
      return list.sort(this.sortFuntion(sortProperty))
     }else{
       return  list.sort(this.sortFuntion(sortProperty)).reverse();

     }

  }

  sortFuntion = (sortProperty)=>{
    return ( item1,item2)=>{
      var item1Value = item1[sortProperty].toUpperCase(); // ignore upper and lowercase
      var item2Value =item2[sortProperty].toUpperCase(); // ignore upper and lowercase
      if (item1Value < item2Value) {
        return -1;
      }
      if (item1Value > item2Value) {
        return 1;
      }

      // If both the property values are equal
      return 0;
    }
  }

}
