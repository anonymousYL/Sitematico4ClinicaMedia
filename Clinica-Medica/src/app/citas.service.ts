import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Cita } from './Citas'


@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor( private httpClient: HttpClient) { 

  }

  getCita() {
    return this.httpClient.get<Cita[]>('http://localhost:4000/api/patient')
  }

  addCita(cita: Cita) {
    return this.httpClient.post<Cita[]>('http://localhost:4000/api/patient', cita)
  }
}
