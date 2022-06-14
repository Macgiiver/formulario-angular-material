
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import { AngulaMaterialModule } from '../angula-material/angula-material.module';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';


@NgModule({
  declarations: [

  
    AddUsuarioComponent
  ],
  imports: [
    CommonModule,
    AngulaMaterialModule,
  ]
})
export class FormularioModule { }