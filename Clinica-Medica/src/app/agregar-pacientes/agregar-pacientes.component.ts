import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.component.html',
  styleUrls: ['./agregar-pacientes.component.css']
})
export class AgregarPacientesComponent implements OnInit {

  agregarPaciente: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;

  constructor(private fb: FormBuilder,
    private aRoute: ActivatedRoute) {
    this.agregarPaciente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      date: ['', Validators.required],
      telefono: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
