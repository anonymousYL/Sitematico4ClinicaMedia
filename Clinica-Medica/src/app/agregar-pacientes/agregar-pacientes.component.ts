import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.component.html',
  styleUrls: ['./agregar-pacientes.component.css']
})
export class AgregarPacientesComponent implements OnInit {

  createPaciente: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private pacientesService: PacientesService) { 
    this.createPaciente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {

  }

  agregarPaciente() {
    const paciente: any = {
      nom_pasiente: this.createPaciente.value.nombre,
      ape_pasiente: this.createPaciente.value.apellido,
      tel_pasiente: this.createPaciente.value.telefono,
      sex_pasiente: this.createPaciente.value.sexo
    }

    try {
      this.pacientesService.addPaciente(paciente).subscribe(() => {
        window.alert('Ingresado con exito');
        this.router.navigate(['/ver-pacientes']);
      })
    } catch (error) {
      window.alert(error);
      console.log(error );
    }
  }
}
