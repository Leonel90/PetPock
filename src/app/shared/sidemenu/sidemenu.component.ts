import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {routes} from "../../app.routes";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public  menuItems = routes
    .map( route => route.children ?? []) /* Mapeamos todas las rutas existente en el app.routes.ts */
    .flat() /* Aplanamos el archivo para no tener un areglo dentro de otro areglo */
    .filter( route => route && route.path ) /* Filtro para excluir el path vacio de darhboard*/
    .filter( route => !route.path?.includes(':')) /* filtro para excluir rutas con dos puntos */
  constructor() {
    //const dashboardRoutes = routes
    //.map( route => route.children ?? []) /* Mapeamos todas las rutas existente en el app.routes.ts */
    // .flat() /* Aplanamos el archivo para no tener un areglo dentro de otro areglo */
    //.filter( route => route && route.path ) /* Filtro para excluir el path vacio de darhboard*/
    //  .filter( route => !route.path?.includes(':')) /* filtro para excluir rutas con dos puntos */
   // console.log(dashboardRoutes);
  }
}
