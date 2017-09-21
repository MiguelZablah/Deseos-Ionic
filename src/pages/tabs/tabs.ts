import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //This tells the tabs component which pages
  //Should be each tab's root page
  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }
}
