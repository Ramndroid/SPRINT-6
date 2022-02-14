import { Component, OnInit } from '@angular/core';
import { Historia, historiesApi } from '../model/histories.array';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayHistories: Historia[] = [];

  esBenvinguda: boolean = true;

  iniciarHistoria(): void {
    this.esBenvinguda = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.arrayHistories = [...historiesApi];
  }

}
