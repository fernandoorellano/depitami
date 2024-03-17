import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarioService } from 'src/app/servicios/calendario.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {



  tareaIngresada: string =  "Sin eventos ni tareas asignadas. Desea crear una?";

  formulario: FormGroup = this.formBuilder.group({
    texto:  ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(public calenServ: CalendarioService, private formBuilder: FormBuilder) { 
 
  }

  ngOnInit(): void {}

  guardarTexto(texto: string, fecha: any){
      console.log("guardado: ",texto," en la fecha ",fecha)
  }

}
