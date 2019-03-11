import { Component } from '@angular/core';
import { VuelosService } from '../services/vuelos.service';
import { ModalController, AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public vuelosService: VuelosService, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){

  }

  async abrirLogin(){
    let loginModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: LoginPage
    });
    await loginModal.present();
  }

  async cerrarSesion(){
    const alert = await this.alertCtrl.create({
      header: 'Cerrar Sesión',
      message: '¿Desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.usuarioService.logged = false;
          }
        }
      ]
    });

    await alert.present();
  }
}
