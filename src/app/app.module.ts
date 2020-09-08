import { PetListModule } from './pet-list/pet-list.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { PetsService } from './services/pets.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    DashboardModule,
    PetListModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
