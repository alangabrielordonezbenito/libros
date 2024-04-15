import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/Quote.interface';
import { QuotesSortingInterface } from '../interfaces/QuotesSortingInterface';

@Injectable({
  providedIn: 'root',
})
export class SortByTitleStrategy implements QuotesSortingInterface {
  sort(quotes: Quote[]): Quote[] {
    return quotes
      .slice()
      .sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  }
}

@Injectable({
  providedIn: 'root',
})
export class SortByAuthorStrategy implements QuotesSortingInterface {
  sort(quotes: Quote[]): Quote[] {
    return quotes
      .slice()
      .sort((a, b) => (a.author || '').localeCompare(b.author || ''));
  }
}

@Injectable({
  providedIn: 'root',
})
export class FilterQuotesByKeyword implements QuotesSortingInterface {
  sort(quotes: Quote[], keyword: string): Quote[] {
    const searchTerm = keyword.toLowerCase();
    return quotes.filter(
      (quote) =>
        quote.content?.includes(searchTerm) ||
        quote.author?.toLowerCase().includes(searchTerm) ||
        quote.title?.toLowerCase().includes(searchTerm) ||
        quote.tags?.includes(searchTerm)
    );
  }
}
