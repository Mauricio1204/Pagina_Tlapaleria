import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jefe } from 'src/app/modelo/Jefe';
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
  jefe:Jefe = new Jefe();
  Guardar(jefe:Jefe){
    this.service.createJefe(this.jefe).subscribe(data=>{
      alert("Agregado");
      this.router.navigate(["listar"]);
    })

}
}