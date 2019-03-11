import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public modalCtrl: ModalController) { }

  async closeModal() {
      await this.modalCtrl.dismiss();
    }

}
