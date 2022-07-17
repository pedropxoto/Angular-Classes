import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://sheet.best/api/sheets/e04c5fd1-f2dd-4a61-83a4-eec79587d99e';

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }

  postUser(user:User): Observable<User>{
    return this.httpClient.post<User>(this.url,user)
  }

  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.url}/id/${id}`)
  }

  updateUser(id: string, user:User): Observable<User>{
    return this.httpClient.put<User>(`${this.url}/id/${id}`,user)
  }

  getOnlyUser(id:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.url}/id/${id}`)
  }
}
