import { IPet } from './../_models/pet.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import IPerson from "../_models/people.model";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  peoples$:Observable<IPerson[]>= this.http.get<IPerson[]>(environment.serverUrl);

  constructor(private http:HttpClient) {

   }

   getPetsGroupedByproperty(property){
    return this.peoples$.pipe(map((people:IPerson[])=>{
      let groupedPetsData= people.reduce((petsMap,pet:IPerson)=>{
        if(pet.pets==null){
          return petsMap;
        }
        if(petsMap[pet[property]]){
          petsMap[pet[property]].push(...pet.pets);
        }else{
          petsMap[pet[property]]=[];
          petsMap[pet[property]].push(...pet.pets);
        }
        return petsMap;
      },{});
      return groupedPetsData;
    }))
   }
}
