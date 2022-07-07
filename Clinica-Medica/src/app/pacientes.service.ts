import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Paciente } from './Paciente'

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor( private httpClient: HttpClient) { 

  }

  getPaciente() {
    return this.httpClient.get<Paciente[]>()
  }
}
