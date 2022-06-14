import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstFormularioComponent } from './first-formulario/first-formulario.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'Formulario', component: FirstFormularioComponent},
      {path: '**', redirectTo: 'Formulario'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }