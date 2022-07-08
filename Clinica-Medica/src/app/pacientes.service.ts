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
    return this.httpClient.get<Paciente[]>('http://localhost:4000/api/patient')
  }

  addPaciente(paciente: Paciente) {
    return this.httpClient.post<Paciente[]>('http://localhost:4000/api/patient', paciente)
  }
}
