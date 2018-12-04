import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepartmentDetailPage } from "../department-detail/department-detail";

@IonicPage()
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html',
})
export class DepartmentsPage {

  departamentos = [
    {name: "San Miguel", zona: "Zona Oriental", img: "san_miguel.jpg"},
    {name: "La Unión", zona: "Zona Oriental", img: "la_union.jpg"},
    {name: "Morazán", zona: "Zona Oriental", img: "morazan.jpg"},
    {name: "Usulután", zona: "Zona Oriental", img: "usulutan.jpg"},
    {name: "San Salvador", zona:"Zona Central" , img: "san_salvador.jpg"},
    {name: "Cuscatlán", zona:"Zona Central" , img: "cuscatlan.jpg"},
    {name: "La Libertad", zona:"Zona Central" , img: "la_libertad.jpg"},
    {name: "Chalatenango", zona:"Zona Central" , img: "chalatenango.jpg"},
    {name: "San Vicente", zona:"Zona Central" , img: "san_vicente.jpg"},
    {name: "La Paz", zona:"Zona Central" , img: "la_paz.jpg"},
    {name: "Cabañas", zona:"Zona Central" , img: "cabanias.jpg"},
    {name: "Santa Ana", zona: "Zona Occidental", img: "santa_ana.jpg"},
    {name: "Ahuachapán", zona: "Zona Occidental", img: "ahuachapan.jpg"},
    {name: "Sonsonate", zona: "Zona Occidental", img: "sonsonate.jpg"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openDepartment(depart){

    this.navCtrl.push(DepartmentDetailPage, { departamento: depart });

  }

}
