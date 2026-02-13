import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Club, ClubService } from '../../services/club-service';


@Component({
  selector: 'app-lista-clubs',
  imports: [FormsModule, CommonModule],
  standalone:true,
  templateUrl: './lista-clubs.html',
  styleUrl: './lista-clubs.scss',
})
export class ListaClubs {
  datos:Array<Club> = [];

  @Output() clubSelected:EventEmitter<Club> = new EventEmitter<Club>();


  selected:number= 0;

  filtroNombre='';

  constructor(public service:ClubService){
    this.datos = service.getClubs()
  }

  selectClub( club:Club){
    this.selected = club.id;
    this.clubSelected.emit(club);

  }

  getEstado( estado:boolean):string{
    if (estado){
      return "Activo";
    }
    return "Inactivo";
  }


  isClubSelected ( sclub:Club){
    if ( this.selected == sclub.id ){
      return true;
    }
    return false;
  }
  onFilterNameChange():void{
    if ( this.filtroNombre == '' ){
      this.datos = this.service.getClubs();
    }
    else{
      this.datos=this.service.getClubs().filter((u)=>u.name.toLowerCase().includes(this.filtroNombre.toLocaleLowerCase()));
    }
  }


}


