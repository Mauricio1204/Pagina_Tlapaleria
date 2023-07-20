import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  empleado: Empleado= new Empleado()
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }
  Edit(){
    let id= localStorage.getItem("id");
    this.service.getEmpleadoId(+id)
    .subscribe(data=>{
      this.empleado=data;
    })
  }
  Actualizare (empleado:Empleado){
    this.service.updateEmpleado(empleado)
    .subscribe(data=>{
      this.empleado=data;
      alert("Se actualizo");
      this.router.navigate(["listar"])
    }) 

}
}
