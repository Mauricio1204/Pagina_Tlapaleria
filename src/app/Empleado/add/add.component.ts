import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  empleado:Empleado = new Empleado();
  Guar(empleado:Empleado){
    this.service.createEmpleado(this.empleado).subscribe(data=>{
      alert("Agregado");
      this.router.navigate(["listar"]);
    })

}
}
