import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  // Almacena los vuelos disponibles
  public vuelos: {
    fechaSalida: Date,
    precio: number,
    reservado: boolean,
    origen: string,
    destino: string
  } [] = [
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 700,
      reservado: false,
      origen: 'Madrid',
      destino: 'Perú'
    },
    {
      fechaSalida: new Date(2019, 2, 16, 21, 0),
      precio: 500,
      reservado: false,
      origen: 'Madrid',
      destino: 'China'
    },
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 30,
      reservado: false,
      origen: 'Japón',
      destino: 'Australia'
    },
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 30,
      reservado: false,
      origen: 'Madrid',
      destino: 'Perú'
    },
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 30,
      reservado: false,
      origen: 'Madrid',
      destino: 'Perú'
    },
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 30,
      reservado: false,
      origen: 'Madrid',
      destino: 'Perú'
    },
    {
      fechaSalida: new Date(2019, 2, 11, 21, 0),
      precio: 30,
      reservado: false,
      origen: 'Madrid',
      destino: 'Perú'
    }
  ];

  constructor() {
   }

}
