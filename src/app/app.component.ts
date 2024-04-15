import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { ThemeService } from './state/themeState.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: string;
  subscription: Subscription;
  theme: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.theme = this.themeService.getStatus();
    console.log(this.theme);
    this.authService.getCurrentUser();
    this.subscription = this.authService.userObservable.subscribe(
      (user) => (this.currentUser = user)
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/quotes');
  }

  toggleTheme() {
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.removeClass(document.body, 'light-theme');
    this.themeService.toggleTheme();
    this.theme = this.themeService.getStatus();
    this.renderer.addClass(document.body, `${this.theme}-theme`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
