import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagem } from '../interfaces/personagens';

@Injectable({
  providedIn: 'root'
})
export class ListService{
  listURL = "https://rickandmortyapi.com/api/character";
  constructor(private httpClient: HttpClient) { }
  
  getList(): Observable<Personagem> {
    return this.httpClient.get<Personagem>(this.listURL)
  }
}
