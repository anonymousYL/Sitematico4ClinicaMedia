import { Component, OnInit } from '@angular/core';

import { PacientesService } from '../pacientes.service';

import { Paciente } from '../Paciente';

@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css']
})
export class VerPacientesComponent implements OnInit {


  pacientes:Paciente[] = [];


  constructor(private pacienteService:PacientesService) {
    this.pacienteService.getPaciente().subscribe( data=> {
      this.pacientes = data;
    })
  }

  ngOnInit(): void {

  }
}
