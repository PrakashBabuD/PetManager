import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByPetTypePipe } from './pipes/filter-by-pet-type.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [FilterByPetTypePipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports :[FilterByPetTypePipe,OrderByPipe]
})
export class SharedModule { }
