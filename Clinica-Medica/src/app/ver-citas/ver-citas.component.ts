import { Component, OnInit } from '@angular/core';

import { CitasService } from '../citas.service';

import { Cita } from '../Citas';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {

  citas:Cita[] = [];

  constructor(private citasService:CitasService) {
    this.citasService.getCita().subscribe( data=> {
      this.citas = data;
    })
  }

  ngOnInit(): void {
  }

}
