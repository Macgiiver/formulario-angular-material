import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'form',
    loadChildren:() => import('./formulario/formulario-routing.module').then(m=> m.FormularioRoutingModule)
  },
  {
    path:'**',
    redirectTo:'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
