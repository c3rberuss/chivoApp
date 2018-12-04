import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { DepartmentsPage } from '../departments/departments';
import { CategoriasListPage } from '../categorias-list/categorias-list';
import { PalabrasListPage } from '../palabras-list/palabras-list';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;

  tabs: any[];

  constructor() {

      this.tabs = [

          { tab: "Inicio", icon: "home", component: HomePage },
          { tab: "Departamentos", icon: "map", component: DepartmentsPage },
          { tab: "Categorías", icon: "list", component: CategoriasListPage },
          { tab: "Palabras", icon: "school", component: PalabrasListPage }

      ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
