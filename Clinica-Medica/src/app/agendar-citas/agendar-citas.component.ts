import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {
  agendarCita: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;

  constructor(private fb: FormBuilder,
    private aRoute: ActivatedRoute) {
    this.agendarCita = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      date: ['', Validators.required],
      telefono: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
