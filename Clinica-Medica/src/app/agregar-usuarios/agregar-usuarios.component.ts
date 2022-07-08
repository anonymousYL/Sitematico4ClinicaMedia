import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent implements OnInit {

  createUsuario: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,private usuariosService: UsuariosService) { 
    this.createUsuario = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nom_usuario: ['', Validators.required],
      ape_usuario: ['', Validators.required],
      email: ['', Validators.required],
      tel_contacto: ['', Validators.required],
      sex_usuario: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {

  }

  agregarUsuario() {
    const usuario: any = {
      username: this.createUsuario.value.username,
      password: this.createUsuario.value.password,
      nom_usuario: this.createUsuario.value.nom_usuario,
      ape_usuario: this.createUsuario.value.ape_usuario,
      email: this.createUsuario.value.email,
      tel_contacto: this.createUsuario.value.tel_contacto,
      sex_usuario: this.createUsuario.value.sex_usuario,
    }

    try {
      this.usuariosService.addUsuario(usuario).subscribe(() => {
    
        this.router.navigate(['/ver-usuarios'])
      })
    } catch (error) {
      console.log(error);
    }
  }

}
