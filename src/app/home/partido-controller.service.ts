import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Partido } from "./partido";

@Injectable({
  providedIn: 'root'
})
export class PartidoControllerService {

  constructor(public http: HttpClient) {
  }

  getData(): Observable<Object> {
		return this.http.get('https://jorgeduarte22.github.io/partido.json').pipe(map(data => {
		  /*let partido = new Partido();
		  partido.parse(data);
		  return partido;*/
		  return data;
		}));
  }


}
