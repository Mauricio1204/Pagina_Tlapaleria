import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jefe } from 'src/app/modelo/Jefe';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  jefe: Jefe= new Jefe()
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id= localStorage.getItem("id");
    this.service.getJefeId(+id)
    .subscribe(data=>{
      this.jefe=data;
    })
  }
  Actualizare (jefe:Jefe){
    this.service.updateJefe(jefe)
    .subscribe(data=>{
      this.jefe=data;
      alert("Se actualizo");
      this.router.navigate(["listar"])
    }) 

  }

}
