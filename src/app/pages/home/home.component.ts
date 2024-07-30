import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UsersActions from '../../../app/shared/store/actions';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { AppInlinePaddingDirective } from '../../shared/directives/app-padding/app-padding.directive';
import { AppState, User, UsersData, } from '../../shared/types';
import { AsyncPipe } from '@angular/common';
import { loadingSelector } from '../../shared/store/selectors'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatPaginatorModule, MatCardModule, MatButtonModule, AppInlinePaddingDirective, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent implements OnInit {

  usersData$: Observable<UsersData> = this.store.select(state => state.users.data!);

  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers({ page: 1, per_page: 6 }))
  }

  // loading = this.store.select(loadingSelector);
  handlePageChange = ({ pageIndex, pageSize }: any) => {
    this.store.dispatch(UsersActions.getUsers({ page: pageIndex + 1, per_page: pageSize }))
  }

  constructor(private store: Store<AppState>) { }
}
