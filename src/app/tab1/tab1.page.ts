import { Component } from '@angular/core';
import { Parque } from 'src/model/parque';
import { ParquesService } from 'src/app/services/parques.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  parques: Parque[] = [];

  constructor(private parquesService: ParquesService) {
    this.parquesService.get().subscribe(
      data => this.parques = data
    );
  }

}
