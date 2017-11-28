import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';

//Servicios
import { ListaDeseosService } from '../../providers/lista-deseos/lista-deseos-service';

//Component
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {

  sliceDinamic:boolean = false;

  constructor( private _listaDeseos : ListaDeseosService, private navCtrl : NavController) {}

  ngOnInit() {

  }

  actualizar( lista, item ){
    item.completado = !item.completado;
    let todosMarcados = true;
    for( item of lista.items ){
      if(!item.completado ){
        todosMarcados = false;
        break;
      }
    }
    lista.terminada = todosMarcados;
    this._listaDeseos.actualizarData();
  }

  irAgregar(){
    this.navCtrl.push( AgregarComponent );
  }

  verDetalle( lista, idx){
    this.navCtrl.push( DetalleComponent, { lista, idx });
  }

  //Corregir para que solo se expanda la lista que escojio

}
