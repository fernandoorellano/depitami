import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarioService } from 'src/app/servicios/calendario.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  formulario: FormGroup = this.formBuilder.group({
    texto:  ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(public calenServ: CalendarioService, private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {}

  ingresarNuevaTarea(textoIngresado: string, fecha: any){
      if(fecha == this.calenServ.fechaCompletaActual){
          this.calenServ.fechaCompletaActual = fecha;
          console.log("las fechas son: ",fecha, this.calenServ.fechaCompletaActual);
        
          this.calenServ.tareaIngresadaDetalle = textoIngresado;
          this.calenServ.fechaNumerica[1][this.calenServ.nuevoIndice] = textoIngresado;
          this.calenServ.fechaNumerica[0][this.calenServ.nuevoIndice] = fecha;
      }
      console.log(fecha)
      this.calenServ.tareaIngresadaDetalle = textoIngresado;
      this.calenServ.fechaNumerica[1][this.calenServ.nuevoIndice] = textoIngresado;
      this.calenServ.fechaNumerica[0][this.calenServ.nuevoIndice] = fecha;

      this.formulario.controls['texto'].reset();

      // this.router.navigate(['inicio']);
    }


  guardarCambios(textoIngresado: string){
      this.calenServ.tareaIngresadaDetalle = textoIngresado;
      this.calenServ.fechaNumerica[1][this.calenServ.nuevoIndice] = textoIngresado;    
      this.formulario.controls['texto'].reset();
  }

}