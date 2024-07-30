import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { User } from '../../types';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, RouterModule, MatButton],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User
}
