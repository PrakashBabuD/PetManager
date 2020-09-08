import { SharedModule } from './../shared/shared.module';
import { PetsService } from './../services/pets.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Input, Component } from '@angular/core';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let fakePetSevice;
  const PET_GROUP={
    "Male":[
      {
        "name": "Sam",
        "type": "Dog"
      },
      {
        "name": "Jim",
        "type": "Cat"
      }
    ],
    "Female":[
     {
      "name": "Simba",
      "type": "Cat"
    },
    {
      "name": "Nemo",
      "type": "Fish"
    }]
  };


  @Component({
    selector: 'pm-pet-list',
    template:"<div></div>"
  })
   class FakePetListComponent {
    @Input() petList;
    @Input() listHeader;
  }

  beforeEach(() => {
    fakePetSevice ={
      getPetsGroupedByproperty:(groupid)=>{
        return of((PET_GROUP))
      }
    };
    TestBed.configureTestingModule({
      declarations: [DashboardComponent,FakePetListComponent],
      imports:[SharedModule],
      providers:[
          {provide: PetsService, useValue: fakePetSevice}
      ]

  }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
  });

  it('should have pet groups in the petsGroupedByGender$ observable', () => {
    component = fixture.componentInstance;

    fixture.detectChanges();

    component.petsGroupedByGender$.subscribe(petGroup=>{
      expect(petGroup).toEqual(petGroup);
    })
  });
});
