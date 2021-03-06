import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index'

//Servicios
import { ListaDeseosService } from '../../providers/lista-deseos/lista-deseos-service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(  public alertCtrl: AlertController,
                public navCtrl: NavController,
                public _listaDeseos: ListaDeseosService) {  }

  ngOnInit() {}

  agregar(){
    if( this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";
  }

  borrarItem( item:number ){
    if( this.items.length >= 0 ){
      this.items.splice( item, 1);
    }
  }

  guardarLista(){
    if( this.nombreLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista= new Lista( this.nombreLista);
    lista.items= this.items;
    //Agregar lista
    // this._listaDeseos.listas.push( lista );
    //Agregar en local Storage
    this._listaDeseos.agregarLista( lista );
    //regresar a la pantalla
    this.navCtrl.pop();
  }
}
