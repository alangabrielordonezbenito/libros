import { Injectable } from '@angular/core';

import { UnsubscribeSubject } from '../interfaces/Unsubscribe.interface';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UnsubscribeService implements UnsubscribeSubject {
  private subscriptions: Subscription[] = [];

  addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  unsubscribe() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
