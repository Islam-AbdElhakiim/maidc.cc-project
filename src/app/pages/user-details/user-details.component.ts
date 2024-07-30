import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';
import { count, fromEvent, scan } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeService } from '../../shared/services/home.service';
import { User } from '../../shared/types';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [UserCardComponent, MatIconModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsPageComponent implements OnInit {
  userId: string | null = null;
  user: User | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.service.searchUserById(+this.userId).subscribe(({ data }) => {
          if (data) {
            this.user = data
          }
        })
      }
    });
  }


  constructor(private route: ActivatedRoute, private service: HomeService) { }



}
