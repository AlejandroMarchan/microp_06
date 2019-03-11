import { Component } from '@angular/core';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public vuelosService: VuelosService){
    
  }
}
