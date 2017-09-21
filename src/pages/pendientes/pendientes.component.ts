import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Servicios
import { ListaDeseosService } from '../../providers/lista-deseos/lista-deseos-service';

//Component
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {

  constructor( private _listaDeseos : ListaDeseosService,
               private navController : NavController) {  }

  ngOnInit() {

  }

  irAgregar(){
    this.navController.push( AgregarComponent );
  }
}
