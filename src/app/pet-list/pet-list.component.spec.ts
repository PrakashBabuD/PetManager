import { PetItemComponent } from './pet-item.component';
import { PetListModule } from './pet-list.module';
import { SharedModule } from './../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;
  const LIST_HEADER = 'Male';
  const PETS = [
    {
      name: 'Simba',
      type: 'Cat',
    },
    {
      name: 'Nemo',
      type: 'Fish',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetListComponent, PetItemComponent],
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
  });

  it('should render the header correctly', () => {
    //Arrange
    component.listHeader = LIST_HEADER;
    component.petList = [];
    //Act
    fixture.detectChanges();
    //Assert
    let debugElement = fixture.debugElement.query(By.css('.petlist__header'));
    expect(debugElement.nativeElement.textContent).toContain('Male');
  });

  it('should render the correct number of pets ', () => {
    //Arrange
    component.listHeader = LIST_HEADER;
    component.petList = PETS;
    //Act
    fixture.detectChanges();
    //Assert
    let debugElements = fixture.debugElement.queryAll(By.css('pm-pet-item'));
     expect(debugElements.length).toBe(2);
  });


  it('should render the pet name ', () => {
    //Arrange
    component.listHeader = LIST_HEADER;
    component.petList = PETS;
    //Act
    fixture.detectChanges();
    //Assert
    let debugElement:DebugElement = fixture.debugElement.query(By.css('.petlist'));
    expect(debugElement.nativeElement.textContent).toContain("Simba");
  });

});
