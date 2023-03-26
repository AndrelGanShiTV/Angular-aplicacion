import { Component } from '@angular/core';
import { Registro } from '../../models/registro.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {
  registro: Registro = {
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    numero: 0,
    email: "",
    cedula: "",
    direccion: ""
  }

}
