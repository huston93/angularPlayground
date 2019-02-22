import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  firestoreHeroes: any[];

  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    // this.getFirestoreHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // getFirestoreHeroes(): void {
  //   this.heroService.getFirestoreHeroes()
  //   .subscribe(heroes => this.firestoreHeroes = heroes);
  // }

}
