import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { UserDetailsPageComponent } from './pages/user-details/user-details.component';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './shared/store/effects';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        providers: [
            provideEffects(UsersEffects)
          ]
    },
    {
        path: 'users/:id',
        component: UserDetailsPageComponent,
    }
];
