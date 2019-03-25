import { Component } from '@angular/core';
import { VuelosService } from '../services/vuelos.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public copiaVuelos: {
    fechaSalida: Date,
    precio: number,
    reservado: boolean,
    origen: {
      ciudad: string,
      bandera: string
    },
    destino: {
      ciudad: string,
      bandera: string
    }
  } [];

  public paises;

  constructor(public toastCtrl: ToastController,public vuelosService: VuelosService, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){
    this.vuelosService.loadPaises().subscribe(
      data => {
        console.log(data);
        this.paises = data;
        this.vuelosService.generateFligths(data);
        this.copiaVuelos = this.vuelosService.vuelos.slice();
      },
      error => {
        console.log('Error al cargar los paises: ');
        console.log(error);
      }
    );
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
          handler: async () => {
            this.usuarioService.logged = false;
            const toast = await this.toastCtrl.create({
              message: '¡Hasta pronto ' + this.usuarioService.usuario.username + '!',
              duration: 2500
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present();
  }

  buscarOrigen(ev: any) {
    // Reset items back to all of the items
    this.copiaVuelos = this.vuelosService.vuelos.slice();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.copiaVuelos = this.vuelosService.vuelos.filter((vuelo) => {
        return (vuelo.origen.ciudad.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      console.log(this.copiaVuelos);
    }
  }

  async reservaVuelo(idVuelo){
    // console.log('reservado');
    if(!this.usuarioService.logged){
      this.abrirLogin();
      const toast = await this.toastCtrl.create({
        message: 'Por favor, inicie sesisión para poder reservar vuelos',
        duration: 2500
      });
      toast.present();
    }else{
      this.vuelosService.vuelos[idVuelo].reservado = true;
    }
  }

}
