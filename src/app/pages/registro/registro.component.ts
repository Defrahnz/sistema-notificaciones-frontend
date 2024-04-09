import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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
    password:'',
    rol:'',
    username:''
  }
  public roles:any[]=[];
  constructor(private userService:UserService, private toast:ToastrService){}
  ngOnInit():void{
    this.obtenerRoles();
    this.generarUsername();
  }


  formSubmit(){
    console.log(this.user)
    if(this.user.email =='' || this.user.email==null){
      this.toast.error("El correo electrónico es requerido","Error de validación");
      return;
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('¡Registrado!','Se ha registrado correctamente el usuario','success')
      },(error=>{
        console.log(error);
        this.toast.error("Ocurrió un error al registrarse","Error de servidor");
      })
    )}

    obtenerRoles(){
      this.userService.obtenerRoles().subscribe(
        (data:any)=>{
          this.roles=data;
        },
        error =>{
          console.log(error);
          this.toast.error('Ocurrió un error al obener los roles','Error de Servidor')
        });
    }

    generarUsername(){
      if(this.user.apellidoP && this.user.apellidoM && this.user.nombre){
        const apellidoP=this.user.apellidoP.substring(0,3).toLowerCase();
        const apellidoM=this.user.apellidoM.substring(0,1).toLowerCase();
        const nombre=this.user.nombre.substring(0,2).toLowerCase();
        const aleatorio=Math.floor(Math.random()*101);
        this.user.username=`${apellidoP}${apellidoM}${nombre}${aleatorio}`;
      }else{
        console.log("Se están entrando los campos");
      }
    }
}
