import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap, startWith } from 'rxjs/operators';
import { HomeService } from '../services/home.service';
import * as UsersActions from './actions';

@Injectable()
export class UsersEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.getUsers),
        mergeMap(({ page, per_page }) => {
            return this.homeService.getUsers({ page, per_page })
                .pipe(
                    startWith(JSON.parse(localStorage.getItem('users') || '')),
                    map(UsersData => UsersActions.getUsersSuccess({ data: UsersData })),
                    catchError((error) => of(UsersActions.getUsersFailure({ error })))
                )
        })
    ));

    constructor(
        private actions$: Actions,
        private homeService: HomeService
    ) { }

}