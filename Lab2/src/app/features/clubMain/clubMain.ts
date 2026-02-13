import { Component, signal, viewChild } from '@angular/core';
import { ListaClubs } from "../../shared/lista-clubs/lista-clubs";
import { ClubDetalle } from "../../shared/club-detalle/club-detalle";
import { ListaParticipantes } from "../../shared/lista-participantes/lista-participantes";
import { ParticipanteForm } from "../../shared/participante-form/participante-form";
import { Club, ClubService, Practicante } from '../../services/club-service';

@Component({
  selector: 'app-club',
  imports: [ListaClubs, ClubDetalle, ListaParticipantes, ParticipanteForm],
  standalone:true,
  templateUrl: './clubMain.html',
  styleUrl: './clubMain.scss',
})
export class ClubMain {

  clubSeleccionado = signal<Club|null>(null);
  mostrarAlta:boolean = false;

  constructor(public service:ClubService){

  }

  onClubSeleccionado(info:Club){
    this.clubSeleccionado.set(info);
  }
  getParticipantes(){
    if ( this.clubSeleccionado() != null ){
      return this.clubSeleccionado()!.practitioners;
    }
    return [];
  }

  showAlta (){
    this.mostrarAlta = true;
  }
  nuevoParticipante ( nuevo:Practicante){
    if ( this.clubSeleccionado() != null ){
      this.service.addPracticante(nuevo,this.clubSeleccionado()!);
    }
  }

}
