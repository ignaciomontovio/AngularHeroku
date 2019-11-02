import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  per:Persona = new Persona();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }
  Guardar(){
    this.service.createPersona(this.per)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["listar"]);
    })
  }
}
