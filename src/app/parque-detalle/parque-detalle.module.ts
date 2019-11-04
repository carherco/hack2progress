import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParqueDetallePage } from './parque-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParqueDetallePage]
})
export class ParqueDetallePageModule {}
