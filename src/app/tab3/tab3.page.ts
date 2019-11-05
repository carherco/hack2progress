import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre = 'Hack2Progress';
  direccion = 'Avenida del progreso';
  email = 'progreso@hack2progress.com';
  telefono = '111-222-333';

  constructor(private callNumber: CallNumber) {}

  llamar() {
    this.callNumber.callNumber(this.telefono, true)
      .then(res => console.log('Llamando', res))
      .catch(err => console.log('Error activando el dialer', err));
  }
}
