import { Component } from '@angular/core';

import {Card} from './card';
import {CardService} from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ],
  providers: [CardService]
})
export class AppComponent {
  title = 'wolfiewocky';
  cards: Card[];
  filtered: Card[];
  
  constructor(private cardService: CardService){}

  getCards(): void {
    this.cards = this.cardService.getCards();
    this.filtered = this.cards;
  }
}
