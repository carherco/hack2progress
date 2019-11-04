import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PARQUES } from 'src/data/parques';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {
    this.http.get(environment.api_url).subscribe();
  }

  add() {
    // console.log(PARQUES);
    // this.http.post(environment.api_url, PARQUES).subscribe();
  }
}
