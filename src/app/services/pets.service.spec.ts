import { TestBed } from '@angular/core/testing';

import { PetsService } from './pets.service';
import { of } from 'rxjs';

describe('PetsService', () => {
  let service: PetsService;
  let httpClientSpy: { get: jasmine.Spy };
  const PEOPLE=[
    {
      "name": "Alice",
      "gender": "Female",
      "age": 64,
      "pets": [
        {
          "name": "Simba",
          "type": "Cat"
        },
        {
          "name": "Nemo",
          "type": "Fish"
        }
      ]
    },
    {
      "name": "Fred",
      "gender": "Male",
      "age": 40,
      "pets": [

        {
          "name": "Sam",
          "type": "Dog"
        },
        {
          "name": "Jim",
          "type": "Cat"
        }
      ]
    }
  ];

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

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  });

  it('should make a call to fetch people data', () => {

    httpClientSpy.get.and.returnValue(of(PEOPLE));

    service = new PetsService(httpClientSpy as any);

    expect(httpClientSpy.get).toHaveBeenCalled();
  });

  it('should contain the returned data in people$ observable', () => {

    httpClientSpy.get.and.returnValue(of(PEOPLE));

    service = new PetsService(httpClientSpy as any);

    service.peoples$.subscribe(people=>{
      expect(people).toEqual(PEOPLE);

    })

    expect(httpClientSpy.get).toHaveBeenCalled();
  });

  it('should group pets based on the property', () => {
    httpClientSpy.get.and.returnValue(of(PEOPLE));

    service = new PetsService(httpClientSpy as any);

    service.getPetsGroupedByproperty('gender').subscribe((petGroups:any)=>{
      expect(petGroups).toEqual(PET_GROUP);
    })

  });
});
