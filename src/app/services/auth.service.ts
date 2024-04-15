import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable, from, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  private userSubject$: BehaviorSubject<string> = new BehaviorSubject('');
  userObservable: Observable<string> = this.userSubject$.asObservable();

  getCurrentUser() {
    user(this.firebaseAuth)
      .pipe(take(1))
      .subscribe((user) => {
        const displayName = user?.displayName || '';
        this.userSubject$.next(displayName);
      });
  }

  signup(email: string, username: string, password: string): Observable<void> {
    //Firebase returns promises
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((resp) => updateProfile(resp.user, { displayName: username }));

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      if (response.user.displayName) {
        this.userSubject$.next(response.user.displayName);
      }
    });

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    this.userSubject$.next('');
    return from(promise).pipe(take(1));
  }

  googleSignIn() {
    const promise = signInWithPopup(
      this.firebaseAuth,
      new GoogleAuthProvider()
    );
    return from(promise);
  }
}
