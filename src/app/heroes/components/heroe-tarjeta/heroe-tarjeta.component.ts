import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  
})
export class HeroeTarjetaComponent  {


  //Puede tener un heroe o ser undefined
  @Input() heroe!:Heroe 

}
