import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { HomeComponent } from './home/home.component';
import { VerCitasComponent } from './ver-citas/ver-citas.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
