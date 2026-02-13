import { Injectable, signal } from '@angular/core';
import {practitioners}  from '../../assets/data/clubs.json'
import {clubs}  from '../../assets/data/clubs.json'
@Injectable({
  providedIn: 'root',
})
export class ClubService {
  clubs = signal<Club[]>(clubs);
  practicantes = signal<Practicante[]>(practitioners);

  getClubs():Club[]{
    return this.clubs();
  }
  getPracticantes():Practicante[]{
    return this.practicantes();
  }

  addPracticante (nuevo:Practicante, club:Club){
    var lastPracticanteId:number = 0;
    this.practicantes().forEach(p=>{
      if ( p.id > lastPracticanteId) lastPracticanteId = p.id
    });
    nuevo.id = lastPracticanteId+1;
    this.practicantes.update( values => {
      values.push(nuevo);
      return values;
    });
    club.practitioners.push(nuevo.id);
  }

}

export interface Practicante{
  id: number,
  name: string,
  age: number,
  rank: string
}
export interface Club{
  id: number,
  name: string,
  style: string,
  city: string,
  active: boolean,
  practitioners: Array<number>
}
