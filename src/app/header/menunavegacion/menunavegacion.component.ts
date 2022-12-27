import { Component } from '@angular/core';

@Component({
  selector: 'app-menunavegacion',
  templateUrl: './menunavegacion.component.html',
  styleUrls: ['./menunavegacion.component.css']
})
export class MenunavegacionComponent {

  nombrehijo:string = 'MueblesDecor 3D';

  cambiarnombrehijo(){
    this.nombrehijo = "Melamina M&L";
  }

}
