import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CitasService } from '../citas.service';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {

  createCita: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private citasService: CitasService) { 
    this.createCita = this.fb.group({
      nom_paciente: ['', Validators.required],
      ape_paciente: ['', Validators.required],
      tel_paciente: ['', Validators.required],
      nom_doctor: ['', Validators.required],
      f_cita: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {

  }

  agregarCita() {
    const cita: any = {
      nom_paciente: this.createCita.value.nom_paciente,
      ape_paciente: this.createCita.value.ape_paciente,
      tel_paciente: this.createCita.value.tel_paciente,
      nom_doctor: this.createCita.value.nom_doctor,
      f_cita: this.createCita.value.f_cita
    }

    try {
      this.citasService.addCita(cita).subscribe(() => {
        window.alert('Ingresado con exito');
        this.router.navigate(['/ver-citas']);
      })
    } catch (error) {
      console.log(error);
    }
  }

}
