import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteNuevoService } from '../service/cliente-nuevo.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent   {

  title = 'AngularCliente';

  apellido:string
  nombre:string
  edad:number
  fechanac:string
  messaj : string

  constructor(
    public agregarServi : ClienteNuevoService,
    private router: Router,

  ){}


  Ingreso(){

    let record = {};
    record['apellido'] = this.apellido;
    record['nombre'] = this.nombre;
    record['edad'] = this.apellido;
    record['fechanac'] = this.fechanac;


    this.agregarServi.AgregarEmpleado(record).then(res => {
      this.apellido = ""
      this.nombre = ""
      this.edad = 0
      this.fechanac = ""
      this.messaj = "Emplreado Grabado"
      console.log(res)
    }).catch(error => {
      console.log(error);
    })

    }


    goPlaces() {
      this.router.navigate(['/', 'listar']);
    }
}
