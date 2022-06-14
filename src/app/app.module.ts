import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngulaMaterialModule } from './angula-material/angula-material.module';
import { FirstFormularioComponent } from './formulario/first-formulario/first-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngulaMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
