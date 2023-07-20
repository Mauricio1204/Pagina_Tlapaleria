import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  cliente:Cliente = new Cliente();
  Guardar(cliente:Cliente){
    this.service.createCliente(this.cliente).subscribe(data=>{
      alert("Agregado");
      this.router.navigate(["listar"]);
    })
  
}
}