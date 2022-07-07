import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { HomeComponent } from './home/home.component';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { VerPacientesComponent } from './ver-pacientes/ver-pacientes.component';
import { AgregarPacientesComponent } from './agregar-pacientes/agregar-pacientes.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ver-citas',
    component: VerCitasComponent
  },
  {
    path: 'agendar-citas', 
    component: AgendarCitasComponent
  },
  {
    path: 'ver-pacientes', 
    component: VerPacientesComponent
  },
  {
    path: 'agregar-paciente', 
    component: AgregarPacientesComponent
  },
  {
    path: 'ver-usuarios', 
    component: VerUsuariosComponent
  },
  {
    path: 'agregar-usuarios', 
    component: AgregarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
