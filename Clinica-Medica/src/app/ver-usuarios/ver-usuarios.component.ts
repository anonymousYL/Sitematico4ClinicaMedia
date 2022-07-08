import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../usuarios.service';

import { Usuario } from '../Usuario';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];

  constructor(private usuariosService:UsuariosService) {
    this.usuariosService.getPaciente().subscribe( data=> {
      this.usuarios = data;
    })
  }

  ngOnInit(): void {
  }

}
