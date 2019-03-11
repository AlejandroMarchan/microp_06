import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  public vuelos: {
    hora: Date,
    precio: number,
    reservado: boolean
  } [] = [
    {
      hora: new Date(25, 3, 2019),
      precio: 30,
      reservado: false
    },
    {
      hora: new Date(25, 4, 2019),
      precio: 30,
      reservado: false
    }
  ];

  constructor() {
   }
}
