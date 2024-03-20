import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarioService } from 'src/app/servicios/calendario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

    nuevoIndice = 0;

    constructor(public calenServ: CalendarioService) {}

    ngOnInit(): void {
        this.calenServ.obtenerFechaActual();
    }

    asignarTareaFecha(indice: number){
        if(this.calenServ.fechaNumerica[1][indice]){
            this.calenServ.tareaIngresadaBool = false;
            this.calenServ.tareaIngresadaDetalle = this.calenServ.fechaNumerica[1][indice];
        }else{
            this.calenServ.tareaIngresadaBool = true;
            this.calenServ.tareaIngresadaDetalle = "Sin eventos ni tareas asignadas";
        }
    }

    clickDay(diaSeleccionado: any, indiceSeleccionado: number){
      
        this.calenServ.nuevoIndice = indiceSeleccionado;

        this.asignarTareaFecha(indiceSeleccionado);
        // this.asignarTarea(diaSeleccionado.fechaCompleta)
        // console.log(diaSeleccionado.fechaCompleta, diaSeleccionado.nameDia);
        this.calenServ.nombreDiaActualEsServ = diaSeleccionado.nameDia;
        this.calenServ.fechaMostradaEnTurno = diaSeleccionado.fechaCompleta;
      
        let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
        let btnSeleccion = indiceSeleccionado;
        this.calenServ.cambiarColorFondoaBlanco(this.nuevoIndice+1)
      
        for (let index = 0; index <= numeros.length; index++) {
            if(btnSeleccion == index){
                this.nuevoIndice = btnSeleccion;
                this.calenServ.cambiarColorFondoaRojo(indiceSeleccionado+1)
                break
            }
        }
    }


}