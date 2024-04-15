import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-space',
  standalone: true,
  imports: [],
  templateUrl: './user-space.component.html',
  styleUrl: './user-space.component.css',
})
export class UserSpaceComponent {
  authService = inject(AuthService);
  currentUser: string;

  ngOnInit(): void {
    this.authService.userObservable.subscribe(
      (user: string) => (this.currentUser = user)
    );
  }
}
