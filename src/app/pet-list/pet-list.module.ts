import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list.component';
import { PetItemComponent } from './pet-item.component';



@NgModule({
  declarations: [PetListComponent, PetItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[PetListComponent, PetItemComponent]
})
export class PetListModule { }
