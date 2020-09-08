import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  petsGroupedByGender$= this._petsService.getPetsGroupedByproperty("gender");
  constructor(private _petsService:PetsService) { }

  ngOnInit(): void {

  }

}
