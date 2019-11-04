import { Component, OnInit } from '@angular/core';
import { ParquesService } from 'src/app/services/parques.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Parque } from 'src/model/parque';
import { Router } from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-parque-detalle',
  templateUrl: './parque-detalle.page.html',
  styleUrls: ['./parque-detalle.page.scss'],
})
export class ParqueDetallePage implements OnInit {

  parque: Parque;
  constructor(
    private parquesService: ParquesService,
    private camara: Camera,
    private router: Router,
    private webview: WebView,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.parque = this.parquesService.getParqueSeleccionado();
  }

  subirFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camara.DestinationType.FILE_URI,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE,
      saveToPhotoAlbum: false
    };

    this.camara.getPicture(options).then((imagePath) => {
      this.parque.foto = this.webview.convertFileSrc(imagePath);
     }, (err) => {
      console.log(err);
     });
  }

  volver() {
    this.router.navigate(['tabs']);
  }

}
