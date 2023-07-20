import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jefe } from 'src/app/modelo/Jefe';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
   jefe!: Jefe[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getJefe()
    .subscribe(data=>{
      this.jefe=data;
    })
  }
  Edi(jefe:Jefe){
    localStorage.setItem("id_jefe", jefe.id_jefe.toString());
    this.router.navigate(["editar"]);
  }

}