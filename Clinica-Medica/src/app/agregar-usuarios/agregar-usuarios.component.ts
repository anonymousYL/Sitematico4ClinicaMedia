import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  agregarUsuario: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;

  constructor(private fb: FormBuilder,
    private aRoute: ActivatedRoute) {
    this.agregarUsuario = this.fb.group({
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      estado: ['', Validators.required],
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
