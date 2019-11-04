import { Component } from '@angular/core';
import { Parque } from 'src/model/parque';
import { ParquesService } from 'src/app/services/parques.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DistanciasService } from 'src/app/services/distancias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  parques: Parque[] = [];
  position = null;

  constructor(
    private parquesService: ParquesService,
    private geolocation: Geolocation,
    private distanciasService: DistanciasService
  ) {}

  ionViewWillEnter() {
    this.parquesService.get().subscribe(
      data => {
        this.parques = data;
        this.calcularDistancias();
        this.ordenar();
      }
    );

    this.geolocation.getCurrentPosition().then(
      data => {
        this.position = data.coords;
        console.log(this.position);
        this.calcularDistancias();
        this.ordenar();
      }
    );
  }

  private calcularDistancias() {
    if (this.position && this.parques.length > 0) {
      this.parques = this.parques.map(
        item => {
          const distancia = this.distanciasService.calcDistancia(
            this.position.latitude,
            this.position.longitude,
            item.posicion.lat,
            item.posicion.lon
          );
          return { ...item, distancia };
        }
      );
    }
  }

  private ordenar() {
    if (this.position && this.parques.length > 0) {
      this.parques = this.parques.sort(
        (a, b) => a.distancia < b.distancia ? -1 : 1
      );
    }
  }

}
