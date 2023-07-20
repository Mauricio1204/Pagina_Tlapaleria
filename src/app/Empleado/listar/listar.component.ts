import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  empleado!: Empleado[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEmpleado()
    .subscribe(data=>{
      this.empleado=data;
    })
  }
  Edit(empleado:Empleado){
    localStorage.setItem("id", empleado.id.toString());
    this.router.navigate(["edit"]);
  }

}
