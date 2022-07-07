import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HomeComponent } from './home/home.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { AgregarPacientesComponent } from './agregar-pacientes/agregar-pacientes.component';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { VerPacientesComponent } from './ver-pacientes/ver-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    VerCitasComponent,
    TopmenuComponent,
    HomeComponent,
    AgendarCitasComponent,
    AgregarPacientesComponent,
    AgregarUsuariosComponent,
    VerUsuariosComponent,
    VerPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
