import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  petsGroupedByGender$= this._petsService.getPetsGroupedByproperty("gender");
  constructor(private _petsService:PetsService) { }

  ngOnInit(): void {

  }

}
