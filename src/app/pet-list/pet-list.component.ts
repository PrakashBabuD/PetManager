import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PetListComponent implements OnInit {
 @Input() petList;
 @Input() listHeader;
  constructor() { }

  ngOnInit(): void {
  }

}
