import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//Servicios
import { ListaDeseosService } from '../../providers/lista-deseos/lista-deseos-service';

//Component
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'aoo-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {

  sliceDinamic:boolean = false;

  constructor( private _listaDeseos : ListaDeseosService,
               private navCtrl : NavController) {  }

  ngOnInit() {}

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


  verDetalle( lista, idx){
    this.navCtrl.push( DetalleComponent, { lista, idx });
  }

  showAll(){
    if(this.sliceDinamic){
      return this.sliceDinamic = false;
    }
    return this.sliceDinamic = true;
  }

}
