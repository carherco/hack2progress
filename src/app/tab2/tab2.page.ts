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

  constructor(
    private parquesService: ParquesService,
    private http: HttpClient,
    private camara: Camera
  ) {
    
  }

  add() {
    // console.log(PARQUES);
    // this.http.post(environment.api_url, PARQUES).subscribe();
  }
}
