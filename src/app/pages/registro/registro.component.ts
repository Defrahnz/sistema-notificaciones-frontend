import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user={
    nombre:'',
    apellidoP:'',
    apellidoM:'',
    calle:'',
    numInt:'',
    numExt:'',
    codigoPostal:'',
    colonia:'',
    ciudad:'',
    telefonoCasa:'',
    telefonoMovil:'',
    email:'',
    password:''
  }
  constructor(private userService:UserService){}
  ngOnInit():void{}


  formSubmit(){
    console.log(this.user)
    if(this.user.email =='' || this.user.email==null){
      alert('El correo es requerido');
      return;
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert('Usuario guardado correctamente')
      },(error=>{
        console.log(error);
        alert('Ha ocurrido un error. Intente de nuevo')
      })
    )

  }
}
