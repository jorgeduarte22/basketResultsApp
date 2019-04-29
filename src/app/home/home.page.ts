import { Component } from '@angular/core';
import { PartidoControllerService } from './partido-controller.service'
import { Partido } from "./partido";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	datosPartido;

	constructor(public partidoCtrl: PartidoControllerService) {
	}

	ngOnInit() {
		this.partidoCtrl.getData().subscribe(res => {
			console.log("EN EL COMPONENTE", res);
			this.datosPartido = res;
		});
	}
}
