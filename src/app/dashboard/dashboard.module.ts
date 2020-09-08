import { SharedModule } from './../shared/shared.module';
import { PetListModule } from './../pet-list/pet-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PetListModule,
  ]
})
export class DashboardModule { }
