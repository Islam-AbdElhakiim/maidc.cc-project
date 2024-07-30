import { Component, ElementRef } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppInlinePaddingDirective } from '../../directives/app-padding/app-padding.directive';
import { MatCardModule } from '@angular/material/card';
import { AutoCloseDirective } from '../../directives/auto-close/auto-close.directive';
import { Observable } from 'rxjs';
import { AppState, User, UsersData, UsersDataState } from '../../types';
import { Store } from '@ngrx/store';
import { HomeService } from '../../services/home.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TopBarComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AppInlinePaddingDirective,
    AutoCloseDirective,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  myControl = new FormControl('');
  user: User | null = null

  handleSearch($event: any) {
    const _id = $event.target.value;
    if (_id) {
      this.service.searchUserById(+_id).subscribe(data => {
        if (data) this.user = data.data
      }, (err) => {
        this.user = null
      })
    } else {
      this.user = null
    }

  }

  usersData$: Observable<UsersData> = this.store.select(state => state.users.data!);



  constructor(private store: Store<AppState>, private service: HomeService) { }

}
