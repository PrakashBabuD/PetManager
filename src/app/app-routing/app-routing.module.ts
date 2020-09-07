import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import APP_ROUTES  from './app-routes.const';


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
