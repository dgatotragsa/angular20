import { Component,computed,input } from '@angular/core';
import { ClubService, Practicante } from '../../services/club-service';


@Component({
  selector: 'app-lista-participantes',
  standalone:true,
  imports: [],
  templateUrl: './lista-participantes.html',
  styleUrl: './lista-participantes.scss',
})
export class ListaParticipantes {
  participantes=input<Array<number>>([]);
  listaParticipantes =computed (()=>this.loadParticipantes());
  datosPracticantes: Array<Practicante> =[];

  constructor(public service:ClubService){
  }

  loadParticipantes (){
    var returnParticipantes:Array<Practicante> = [];

    if(this.participantes().length > 0 ) {

      this.participantes().forEach ( idp=> {
        returnParticipantes.push (this.service.getPracticantes().filter(practicante=> idp==practicante.id)[0]);
      });
    }
    return returnParticipantes;
  }

}

