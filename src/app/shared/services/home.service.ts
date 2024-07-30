import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User, UsersData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURL: string = environment.BASE_URL;
  usersEndpoint?: string = 'users';

  constructor(private http: HttpClient) { }

  getUsers = (params: { page: number; per_page: number }): Observable<UsersData> => this.http.get<UsersData>(`${this.baseURL}${this.usersEndpoint}`, { params: { ...params } }).pipe(
    tap(response => {
      // Save the response to localStorage
      localStorage.setItem('users', JSON.stringify(response));
    }),
    map(response => response)
  );



  searchedUser = new Subject<User>;
  searchUserById = (id: number) => {
    return this.http.get<{ data: User }>(`https://reqres.in/api/users/${id}`)
  }
}
