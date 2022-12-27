import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiepaginaComponent } from './piepagina/piepagina.component';



@NgModule({
  declarations: [
    PiepaginaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PiepaginaComponent
  ]
})
export class FooterModule { }
