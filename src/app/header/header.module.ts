import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavegacionComponent } from './menunavegacion/menunavegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    MenunavegacionComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenunavegacionComponent
  ]
})
export class HeaderModule { }
