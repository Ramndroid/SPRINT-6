import { Component, Input, OnInit } from '@angular/core';
import { Historia } from '../model/histories.array';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() histories: Historia[] = [];

  currentScene: number = 0;

  prev(): void {
    if (this.currentScene == 0)
      this.currentScene = this.histories.length - 1;
    else
      this.currentScene--;
  }

  next(): void {
    if (this.currentScene == this.histories.length - 1)
      this.currentScene = 0;
    else
      this.currentScene++;
  }

  constructor() { }

  ngOnInit(): void { }

}
