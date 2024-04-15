import { Routes } from '@angular/router';
import { UserSpaceComponent } from './components/user-space/user-space.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'quotes', pathMatch: 'full' },
  {
    path: 'user-space',
    component: UserSpaceComponent,
    canActivate: [AuthGuard],
  },
  { path: 'authors', component: AuthorsComponent },
  { path: 'quotes', component: QuotesListComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];
