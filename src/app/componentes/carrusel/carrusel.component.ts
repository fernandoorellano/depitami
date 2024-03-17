import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
  texto: string;
  index: number;
  btnTexto: string
}

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 0;

  selectedIndex: number = 0; 

  ngOnInit(): void {
      setInterval(() => {
        this.onNextClick();             
    }, this.slideInterval);
  }

  onPrevClick(): void{
      if(this.selectedIndex === 0){ 
          this.selectedIndex = this.images.length - 1;
      }else{
          this.selectedIndex--;
      }
  }

  onNextClick(): void{
      // console.log(this.selectedIndex, this.images.length)
      if(this.selectedIndex === this.images.length - 1){
          this.selectedIndex = 0;
      }else{
          this.selectedIndex++;
      }
  }

}