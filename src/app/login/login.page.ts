import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public usuario: string = '';
  public password: string = '';

  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController) { }

  async login(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para iniciar sesión.',
      buttons: ['Vale']
    });
    if(!this.usuario || !this.password){
      return await alert.present();
    }
    this.usuarioService.usuario.username = this.usuario;
    this.usuarioService.usuario.contrasena = this.password;
    this.usuarioService.logged = true;
    this.closeModal();
  }

  async closeModal() {
      await this.modalCtrl.dismiss();
    }

}
