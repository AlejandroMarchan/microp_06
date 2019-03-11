import { Component } from '@angular/core';
import { VuelosService } from '../services/vuelos.service';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public vuelosService: VuelosService, public modalCtrl: ModalController){

  }

  async logIn(){
    let loginModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: LoginPage
    });
    await loginModal.present();
  }
}
