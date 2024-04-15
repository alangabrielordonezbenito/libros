import { Quote } from './Quote.interface';

export interface QuotesSortingInterface {
  sort(quotes: Quote[], keyword?: string): Quote[];
}
