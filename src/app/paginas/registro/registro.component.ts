import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  mensajeModal = "";
  tituloModal = "Error en el envio";
  inputEstilo: any;
  btnModal: any;

  formulario: FormGroup = this.formBuilder.group({
    email:  ['', [Validators.required, Validators.minLength(3)]],
    contraseña: ['', [Validators.required, Validators.minLength(5)]]    
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {
      this.inputEstilo = {
          // color: "red",
          // width: '40%'
          width: '100%'
      };
      this.btnModal = {
        background: "red",
        color: "white"
      }
  }

  ngOnInit(): void {}


  guardarCliente(){
    if( !this.formulario.controls['email'].touched && !this.formulario.controls['contraseña'].touched){
          this.mensajeModal = "El formulario esta incompleto, por favor complete los campos";
    }
    else
    if( this.formulario.controls['email'].touched && this.formulario.controls['email'].invalid ||
        this.formulario.controls['contraseña'].touched && this.formulario.controls['contraseña'].invalid){
          this.mensajeModal = "El formulario esta incompleto, por favor complete los campos";
    }
    else
    if( !this.formulario.controls['email'].touched && this.formulario.controls['email'].invalid){
          this.mensajeModal = "El email es incorrecto";
    }
    else
    if( !this.formulario.controls['contraseña'].touched && this.formulario.controls['contraseña'].invalid){
          this.mensajeModal = "El mensaje es incorrectro";
    }
    else
    this.confirmarEnvio();
  }

  confirmarEnvio(){
      if( this.formulario.controls['email'].valid && this.formulario.controls['contraseña'].valid){
          const cliente: Usuario = {
            email: this.formulario.controls['email'].value,
            mensaje: this.formulario.controls['contraseña'].value
          }
          // console.log(cliente)
          this.tituloModal = "Envio correcto";
          this.btnModal.background = "green"
          this.formulario.controls['email'].reset();
          this.formulario.controls['contraseña'].reset();
          this.mensajeModal = "Gracias por enviar su contraseña, responderemos a la brevedad";
      }else{
        this.tituloModal = "Error en el envio";
        this.btnModal.background = "red"
      }
  }

  iniciaSesion(){
    this.router.navigate(["/inicio-sesion"]);
  }
}
