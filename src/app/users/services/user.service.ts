import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, catchError, of, map } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ this.baseUrl }/users`);
  }

  getUserById( id: string ): Observable<User|undefined> {
    return this.http.get<User>(`${ this.baseUrl }/users/${ id }`)
      .pipe(
        catchError( error => of( undefined ) )
      );
  }

  addUser( user: User): Observable<User> {
    return this.http.post<User>(`${ this.baseUrl }/users`, user);
  }

  updateUser( user: User ): Observable<User> {
    if ( !user.id ) throw Error('User id is required')

    return this.http.patch<User>(`${ this.baseUrl }/users/${ user.id }`, user);
  }

  deleteUserById( id: string ): Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/users/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( error => of(false) )
      );
  }
}
