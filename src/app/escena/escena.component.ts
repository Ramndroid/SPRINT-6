import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() histories: string[] = [""];

  currentScene: number = 0;
  
  prev() {
    if (this.currentScene == 0)
      // this.currentScene = 0; //// igualando a 0 para evitar el efecto carrusel
      this.currentScene = this.histories.length -1;
    else 
      this.currentScene--;      
  }

  next() {
    if (this.currentScene == this.histories.length -1)
      // this.currentScene = this.histories.length -1; //// igualando al máximo valor de la matriz para evitar efecto carrusel
      this.currentScene = 0;
    else 
      this.currentScene++; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
