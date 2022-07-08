import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from './Usuario'

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  constructor( private httpClient: HttpClient) { 

  }

  getPaciente() {
    return this.httpClient.get<Usuario[]>('http://localhost:4000/api/users')
  }

  addUsuario(usuario: Usuario) {
    return this.httpClient.post<Usuario[]>('http://localhost:4000/api/users', usuario)
  }
}
