import { Component, OnInit } from '@angular/core';
import { ModuloService } from 'src/app/services/modulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  modulos:any[]=[];
  constructor(private moduloService:ModuloService){}

  ngOnInit(): void {
      this.moduloService.obtenerModulosActivos().subscribe(
        (data:any)=>{
          this.modulos = data;
        },
        error =>{
          console.log("Ocurrio un error al obtener los módulos");
        });
  }
}
