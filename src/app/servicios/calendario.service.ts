import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

    diasSemanales: any = [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado","domingo" ];

    monthSelect: any[] = [];
    fechaSeleccionadaServ: any;

    nombreDiaActualEsServ: any;
    numeroDiaActualEsServ: any;

    nombreMesActualEsServ: any;
    numeroMesActualEsServ: any;

    fechaCompletaActual: any;
    nombreMesActual: any;

    fechaMostradaEnTurno: any;

    nuevoIndice = 0;


    tareaIngresadaDetalle: string =  "";
    tareaIngresadaBool: boolean = true;

    // fechaNumerica2:[string] = [""];

    fechaNumerica:[any][any] = [[], []];
  
    constructor() {
        moment.locale('es');
        this.nombreDiaActualEsServ = moment(new Date()).format('dddd');
        this.numeroDiaActualEsServ = moment(new Date()).format('DD');
        this.nombreMesActualEsServ = moment(new Date()).format('MMMM');
        this.numeroMesActualEsServ = moment(new Date()).format('MM');
    }

    obtenerFechaActual(){
        moment.locale('es')
        this.nombreMesActual = moment(new Date()).format('MMMM');
        this.fechaCompletaActual = moment(new Date()).format('DD-MM-YYYY');
      
        
      
        this.fechaMostradaEnTurno = moment(new Date()).format('DD-MM-YYYY');
        this.getDaysFromDate(moment().format("MM"), moment().format("YYYY"));
    }

    asignarTarea(fecha: any, a:number){
    
        if(fecha == '01-03-2024'){
            this.fechaNumerica[0][a] = fecha;
            this.fechaNumerica[1][a] = "Depilar a tame";
        }

        if(fecha == '10-03-2024'){
            this.fechaNumerica[0][a] = fecha;
            this.fechaNumerica[1][a] = "Hablar con los viejos";
        }
 
    }


    getDaysFromDate( month: any, year: any){
        const startDate = moment.utc((new Date(`${year}/${month}/01`)));
        const endDate = startDate.clone().endOf('month');
        this.fechaSeleccionadaServ = startDate;
        const diffday = endDate.diff(startDate, 'days', true);
        const numberDays  = Math.round(diffday);

        const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
          
            a = parseInt(a) + 1;
          
            const dayObject = moment.utc((new Date(`${year}-${month}-${a}`)));

            this.asignarTarea(dayObject.format('DD-MM-YYYY'),a);
        
            return {
                fechaCompleta: dayObject.format("DD-MM-YYYY"),
                nameDia: dayObject.format("dddd"),
                numeroDia: dayObject.format("DD"),
                nameMes: dayObject.format("MMMM"),
                numeroMes: dayObject.format("MM"),
                nameAno: dayObject.format("YYYY"),
                value: a,
                indexWeek: dayObject.isoWeekday()
            };
        });
        this.monthSelect = arrayDays;
    }


    cambiarMes(flag: any){
        if(flag <0 ){
            const nextDate = this.fechaSeleccionadaServ.clone().subtract(1, 'month');
            this.nombreMesActualEsServ = nextDate.format('MMMM');
            this.getDaysFromDate(nextDate.format('MM'), nextDate.format('YYYY'));
        } else {
            const nextDate = this.fechaSeleccionadaServ.clone().add(1, 'month');
            this.nombreMesActualEsServ = nextDate.format('MMMM');
            this.getDaysFromDate(nextDate.format('MM'), nextDate.format('YYYY'));
        }
    }

    cambiarColorFondoaRojo(indice: number){
        var btn = document.getElementsByClassName('btn')[indice];
        if(btn){
        btn.setAttribute("style", "border: 1px solid white; color: white");}
    }

    cambiarColorFondoaBlanco(indice: number){
        var btn = document.getElementsByClassName('btn')[indice];
        if(btn){
        btn.setAttribute("style", "color: white");}
    }

}