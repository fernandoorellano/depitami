import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

    diasSemanales: any = [ "domingo", "Lunes", "martes", "Miercoles", "Jueves", "viernes", "Sabado" ];

    monthSelect: any[] = [];
    fechaSeleccionadaServ: any;

    numeroDiaActualEsServ: any;
    nombreMesActualEsServ: any;

    fechaCompletaActual: any;
    nombreMesActual: any;


    nuevoIndice = 0; 
  
    constructor() {
        moment.locale('es');
        this.numeroDiaActualEsServ = moment(new Date()).format('DD');
        this.nombreMesActualEsServ = moment(new Date()).format('MMMM');
    }

  obtenerFechaActual(){
        moment.locale('es')
        this.nombreMesActual = moment(new Date()).format('MMMM');
        this.fechaCompletaActual = moment(new Date()).format('DD-MM-YYYY');        
        this.getDaysFromDate(moment().format("MM"), moment().format("YYYY"));
    }


    getDaysFromDate( month: any, year: any){
        const startDate = moment.utc((new Date(`${year}/${month}/01`)));
        // console.log(startDate)
        const endDate = startDate.clone().endOf('month');
        // console.log(endDate)
        this.fechaSeleccionadaServ = startDate;
        // console.log(this.fechaSeleccionadaServ.format('dddd-MM-YYYY'))
        const diffday = endDate.diff(startDate, 'days', true);
        const numberDays  = Math.round(diffday);

        const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
          
            a = parseInt(a) + 1;
          
            const dayObject = moment(new Date(`${year}-${month}-${a+1}`));
        
            return {
                nameDia: dayObject.format("dddd"),
                nameMes: dayObject.format("MMMM"),
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
        btn.setAttribute("style", "color: red");}
    }

    cambiarColorFondoaBlanco(indice: number){
        var btn = document.getElementsByClassName('btn')[indice];
        if(btn){
        btn.setAttribute("style", "color: white");}
    }

}
