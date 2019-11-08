import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { Parque } from 'src/model/parque';
import { ParquesService } from 'src/app/services/parques.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  parque: Parque;
  mensaje: string;

  constructor(private parquesService: ParquesService, private camara: Camera, private toastController: ToastController) {
    this.parque = {
      nombre: '',
      direccion: '',
      posicion: { lat: null, lon: null }
    };
  }

  guardar() {
    // this.parquesService.post(this.parque).subscribe(
    //   respuesta => this.mensaje = 'Parque guardado correctamente',
    //   error => this.mensaje = 'Error al guardar el parque'
    // );

    this.parquesService.post(this.parque).subscribe(
      respuesta => this.presentToast('Parque guardado correctamente'),
      error => this.presentToast('Error al guardar el parque')
    );
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
