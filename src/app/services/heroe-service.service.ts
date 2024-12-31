import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../data/heroes-entity';
import { Heroe } from '../data/heroe-entity copy';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
urlApi="https://adl-wcbdf-eje-10-superheroes.onrender.com/api/v1/heroes"
//inyectamos el cliente para conectarnos 
  constructor(private httpClient: HttpClient) { }

  //get 
  getAllHeroes():Observable<Heroes>{
    return this.httpClient.get<Heroes>(this.urlApi)

  }
  //get by id
  getHeroe(id:number):Observable<Heroe>{
    return this.httpClient.get<Heroe>(this.urlApi+"/"+id)
  }
  //post
  postHeroe(heroe: Heroe):Observable<Heroe>{
    return this.httpClient.post<Heroe>(this.urlApi, heroe)
  }
  //put
  putHeroe(id: number, heroe: Heroe): Observable<Heroe>{
    return this.httpClient.put<Heroe>(this.urlApi+"/"+id, heroe)
  }
  //delete
  deleteHeroe(id: number):Observable<Heroe>{
    return this.httpClient.delete<Heroe>(this.urlApi+"/"+id)
  }
}
