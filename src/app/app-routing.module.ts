import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './header/inicio/inicio.component';
import { ProductosComponent } from './header/productos/productos.component';
import { ContactoComponent } from './header/contacto/contacto.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'productos', component: ProductosComponent},
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
