import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroById();
  }
  getHeroById() {
    const id = +this.route.snapshot.paramMap.get('id');
    //Using Observables
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);

    //Normal Function call
    //this.hero = this.heroService.getHeroById(id);
  }

  // The route.snapshot is a static image of the route information shortly after the component was created.
  // The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
  // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
  // The browser refreshes and the app crashes with a compiler error. HeroService doesn't have a getHero() method. Add it now.

  goBack(): void {
    this.location.back()
  }
}
