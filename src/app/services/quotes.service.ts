import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/Quote.interface';
import {
  SortByAuthorStrategy,
  SortByTitleStrategy,
  FilterQuotesByKeyword,
} from './quotesSortingStrategy';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  firestore = inject(Firestore);
  sortByTitleStrategy = inject(SortByTitleStrategy);
  sortByAuthorStrategy = inject(SortByAuthorStrategy);
  filterByKeyword = inject(FilterQuotesByKeyword);
  quotesCollection = collection(this.firestore, 'quotes');

  getQuotes(): Observable<Quote[]> {
    return collectionData(this.quotesCollection, {
      idField: 'id',
    }) as Observable<Quote[]>;
  }

  sort(
    quotes: Quote[],
    strategy: 'title' | 'author' | 'keyword',
    keyword = ''
  ): Quote[] {
    switch (strategy) {
      case 'title':
        return this.sortByTitleStrategy.sort(quotes);
      case 'author':
        return this.sortByAuthorStrategy.sort(quotes);
      case 'keyword':
        return this.filterByKeyword.sort(quotes, keyword);
      default:
        return quotes;
    }
  }
}
