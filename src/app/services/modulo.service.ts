import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(private http:HttpClient) { }

  obtenerModulosActivos():Observable<any>{
    return this.http.get(`${baseUrl}/modulos/activos`);
  }
}
