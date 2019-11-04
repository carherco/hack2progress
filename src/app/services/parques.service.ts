import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parque } from 'src/model/parque';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParquesService {

  url = environment.api_url;
  constructor(private http: HttpClient) { }

  get(): Observable<Parque[]> {
    return this.http.get<Parque[]>(this.url);
  }
}
