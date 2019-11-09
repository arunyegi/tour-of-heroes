import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Normal method
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //Using observables

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  //normal method
  // getHeroById(id: number): Hero {
  //   return (HEROES.find(hero => hero.id === id));
  // }
  //Using observables

  getHeroById(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

}
