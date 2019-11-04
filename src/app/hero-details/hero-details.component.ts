import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero[] = [];
  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroById();
  }
  getHeroById() {
    const id = +this.route.snapshot.paramMap.get('id');
  }
}
