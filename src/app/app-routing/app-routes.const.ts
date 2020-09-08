
import { Routes } from '@angular/router';

import  {DashboardComponent}  from "../dashboard/dashboard.component";

const APP_ROUTES: Routes = [
     {
        path: 'home', component: DashboardComponent
      },
      {path: '**', redirectTo: 'home'}
];

export default APP_ROUTES;
