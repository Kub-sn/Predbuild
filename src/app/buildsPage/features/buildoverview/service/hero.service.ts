import { Hero } from '../model/hero.dto';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  mockHero: Hero[] = [
    {
      id: 1,
      name: 'Fey',
      role: 'Mid',
      types: 'Magician',
      description: 'A flying thing',
      abilities: ['blo', 'bla', 'blub'],
      imageUrl: ''
    },
    {
      id: 2,
      name: 'Murdock',
      role: 'Duo',
      types: 'Carry',
      description: 'pewpew',
      abilities: ['shotgun', 'trap', 'snipe'],
      imageUrl: ''
    },
  ];

  constructor() { }

  public getHeros(): Observable<Hero[]> {
    return of(this.mockHero);
  }
}
