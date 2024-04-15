import { Subscription } from 'rxjs';

export interface UnsubscribeSubject {
  addSubscription(observer: Subscription): void;
  unsubscribe(): void;
}
