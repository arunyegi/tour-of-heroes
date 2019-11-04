import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  heroes: any;
  ngOnInit() {
    this.getHeroes();
  }

  //REMOVED after adding routing
  //selectedHero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.messageService.add('Message:Heroes data fetched');
    // this.heroes = this.heroService.getHeroes();
  }
}
