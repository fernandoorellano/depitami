import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  images = [
    {
      imageSrc:
          'https://img.freepik.com/fotos-premium/oficina-edificio-moderno-fondo-cielo-azul_35761-198.jpg?w=2000',
            imageAlt: 'img1',
            texto: "todo lo que tenes que saber",
            index: 0,
            btnTexto: "blog"
    },
    {
      imageSrc:
        'https://fondosmil.com/fondo/60032.jpg',
         imageAlt: 'img2',
         texto: "descubri el metodo",
         index: 1,
         btnTexto: "depilasion laser"
    },
    {
      imageSrc:
        'https://imgar.zonapropcdn.com/avisos/1/00/48/23/19/63/720x532/1809087476.jpg',
        imageAlt: 'img3',
        texto: "vivi tu experiencia",
        index: 2,
        btnTexto: "axilas free"
    },
    {
      imageSrc:
        'https://fondosmil.com/fondo/56628.jpg',
        imageAlt: 'img4',
        texto: "saca un turno",
        index: 3,
        btnTexto: "contacto"
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
