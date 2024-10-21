import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { __decorate } from 'tslib';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  enVenta =[
    {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
    {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
    {marca:"Peugeot",modelo:"Style D",anio:2000},
    {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
    {marca:"Ford",modelo:"Focus Plus",anio:2016},
    {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
    {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
    {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
    {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
    {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999}
  ] 
  agregadosRecientemente =[
    {marca:"Peugeot", modelo:"207 Xt",anio:2009},
    {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
    {marca:"Honda",modelo:"Acord Exrl",anio:1998},
    {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
    {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
    {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
  ]
  cantidadTotal =[
    {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
    {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
    {marca:"Peugeot",modelo:"Style D",anio:2000},
    {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
    {marca:"Ford",modelo:"Focus Plus",anio:2016},
    {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
    {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
    {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
    {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
    {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999},
    {marca:"Peugeot", modelo:"207 Xt",anio:2009},
    {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
    {marca:"Honda",modelo:"Acord Exrl",anio:1998},
    {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
    {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
    {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
  ]


                           /*CODIGO PARA AGREGAR Y VER COMENTARIOS*/
/*function agregarMensaje(){
  let textoIngresado=document.getElementById("txtMensaje")
  let parrafoMensaje=document.createElement("p");
  parrafoMensaje.innerHTML=textoIngresado.value;
  let contenedor=document.getElementById("areaMensajes")
  contenedor.appendChild(parrafoMensaje)}*/
  
                          /*CODIGO PARA VER LISTA TOTAL DE VEHICULOS MEDIANTE JS*/
  /*console.log ("LISTA DE AUTOS")
  /* function mostrarVehiculos (cantidadTotal){
    for (i=0; cantidadTotal.length-1; i++){
     console.log("Vehiculos que posee la empresa: "+cantidadTotal[i])
    } }*/

                          //CODIGO PARA MOSTRAR POR CONSOLA SOLO AUTOS FIAT
                          // AL FILTRAR ARRAY CANTIDADTOTAL
/*console.log ("Los autos marcas Fiat que la empresa dispone son:"+
 autosFiat = this.cantidadTotal.filter(
  (e)=> {return e=="Fiat"}) 
  )*/
  
                          /*CODIGO PARA CAMBIAR ESTILO MEDIANTE JS*/
  /*function cambiarDecoracion (){
    let elemento = document.getElementsByClassName("mih1");
    elemento.style.text-decoration= "none";
  }*/
  
  /* let encabezado = document.getElementsByTagName("h3");
    for (let i = 0; i < elementosRojos.length ; i++){
    elementosRojos[i].style.color="red"
    elementosRojos[i].style.decoration="none"  //cambia el color a uno nuevo
   }*/
    
    /*CODIGO CREAR ENCABEZADO H4*/
    /*let titulo4=document.createElement("h4")*/


}




