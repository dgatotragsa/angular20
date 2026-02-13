import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { Practicante } from '../../services/club-service';



@Component({
  selector: 'app-participante-form',
  imports: [ReactiveFormsModule],
  templateUrl: './participante-form.html',
  styleUrl: './participante-form.scss',
})
export class ParticipanteForm {

  @Output() participanteEmitter:EventEmitter<Practicante> = new EventEmitter<Practicante>();

  altaForm = new FormGroup({
    name: new FormControl("",{
      nonNullable: true,
      validators:[Validators.required]
    }),
    age: new FormControl(10,{
      nonNullable:true,
      validators:[Validators.min(10)]
    }),
    rank: new FormControl("",{
      nonNullable:true,
      validators:[Validators.required]
    })
  })

  addParticipante (){
    var nuevo:Practicante = {
      id: -1,
      name: this.altaForm.controls.name.value,
      age: this.altaForm.controls.age.value,
      rank: this.altaForm.controls.rank.value
    };
    console.log(nuevo);
    this.participanteEmitter.emit(nuevo);
  }
}

