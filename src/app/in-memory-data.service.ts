import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain Obvious' },
      { id: 12, name: 'Killa Shoes' },
      { id: 13, name: 'Fly McFlyface' },
      { id: 14, name: 'Celerytas' },
      { id: 15, name: 'Fridge Magneta' },
      { id: 16, name: 'RubberDuckyMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr Smartypants' },
      { id: 19, name: 'Sparky' },
      { id: 20, name: 'Breeze' }
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }
}
