import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit{
    title = 'wolfiewocky';
    cards: Card[];
    filtered: Card[];
    sortBy: string = null;
    priceRange: number[] = [0, Infinity];
    infinity = Infinity; //stupid angular #HateChaBro
    category: string = null;
    filterCategories: string[] = [
        'ALICE',
        'MARVEL',
        'DC',
        'ARCHEY',
    ]
  
    constructor(private cardService: CardService){}

    getCards(): void {
        this.cards = this.cardService.getCards();
        this.filtered = this.cards;
    }

    ngOnInit(): void {
        this.getCards();
    }

    nameSort(): void {
        this.filtered.sort(function(a,b){
            if(a.name < b.name) { return -1; }
            else if(a.name > b.name) { return 1; }
            else { return 0; }
        });
    }

    priceSort(): void {
        this.filtered.sort(function(a,b) {
            return a.price - b.price;
        });
    }

    priceCondition(card): boolean {
        return this.priceRange[0] <= card.price && card.price <= this.priceRange[1];
    }

    categoryCondition(card): boolean {
        if(this.category == null) { return true; }
        else if(this.filterCategories.includes(this.category)) { 
            return card.category == this.category;
        }
        else { return !this.filterCategories.includes(card.category); }
    }

    priceFilter(lower: number, higher: number): void {
        this.priceRange = [lower, higher];
        this.filtered = [];
        this.cards.forEach((card) =>  {
            if(this.priceCondition(card)) {
                if(this.category == null) { this.filtered.push(card); }
                else if(this.categoryCondition(card)) { this.filtered.push(card); }
            }
        });
    }

    categoryFilter(category: string): void {
        this.category = category;
        this.filtered = [];
        this.cards.forEach((card) => {
            if(this.categoryCondition(card) && this.priceCondition(card))
                this.filtered.push(card);
        });
    }

    rerunFilters(): void {
        this.categoryFilter(this.category);
    }
}
