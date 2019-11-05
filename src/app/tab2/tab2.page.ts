import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Parque } from 'src/model/parque';
import { ParquesService } from 'src/app/services/parques.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  parque: Parque;
  mensaje: string;

  constructor(
    private parquesService: ParquesService,
    private http: HttpClient,
    private camara: Camera
  ) {
    this.parque = {
      nombre: '',
      direccion: '',
      posicion: { lat: null, lon: null }
    }
  }

  guardar() {
    this.parquesService.post(this.parque).subscribe(
      respuesta => this.mensaje = 'Parque guardado correctamente',
      error => this.mensaje = 'Error al guardar el parque'
    );
  }
}
