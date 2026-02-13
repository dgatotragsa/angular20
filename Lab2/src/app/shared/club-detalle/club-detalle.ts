import { Component, Input,Output, input } from '@angular/core';
import { Club } from '../../services/club-service';



@Component({
  selector: 'app-club-detalle',
  imports: [],
  templateUrl: './club-detalle.html',
  styleUrl: './club-detalle.scss',
})
export class ClubDetalle {
  @Input({required:true}) club!:Club;

  estadoClub (value:boolean){
    if ( value ){
      console.log("El club esta en estado activo");
    }

  }
}
