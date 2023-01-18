import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  
  constructor( private heroesService:HeroesService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
      //  for (let i = 0; i < resp.length; i++) {
      //    this.heroes.push(resp[i])
      //  }
      });
  }

}
