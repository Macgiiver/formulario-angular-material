import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  usuario: string;
  email: string;
  nombre: string;
  apellido: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {usuario: 'Hydrogen', email: 'Hydrogen@gmail.com', nombre: 'Luis', apellido: 'H'},
  {usuario: 'Helium', email: 'Helium@gmail.com', nombre: 'Pedro', apellido: 'He'},
  {usuario: 'Lithium', email: 'Lithium@gmail.com', nombre: 'Juan', apellido: 'Li'},
  {usuario: 'Beryllium', email: 'Beryllium@gmail.com', nombre: 'Camilo', apellido: 'Be'},
  {usuario: 'Boron', email: 'Boron@gmail.com', nombre: 'Gustavo', apellido: 'B'},
  {usuario: 'Carbon', email: 'Carbon@gmail.com', nombre: 'Raul', apellido: 'C'},
  {usuario: 'Nitrogen', email: 'Nitrogen@gmail.com', nombre: 'Maria', apellido: 'N'},
  {usuario: 'Oxygen', email: 'Oxygen@gmail.com', nombre: 'Alejandra', apellido: 'O'},
  {usuario: 'Fluorine', email: 'Fluorine@gmail.com', nombre: 'Paola', apellido: 'F'},
  {usuario: 'Neon', email: 'Neon@gmail.com', nombre: 'Carmen', apellido: 'Ne'},
  {usuario: 'Sodium', email: 'Sodium@gmail.com', nombre: 'Sara', apellido: 'Na'},
  {usuario: 'Magnesium', email: 'Magnesium@gmail.com', nombre: 'Marta', apellido: 'Mg'},
  {usuario: 'Aluminum', email: 'Aluminum@gmail.com', nombre: 'Lucas', apellido: 'Al'},
  {usuario: 'Silicon', email: 'Silicon@gmail.com', nombre: 'Maicol', apellido: 'Si'},
  {usuario: 'Phosphorus', email: 'Phosphorus@gmail.com', nombre: 'Jhon', apellido: 'P'},
  {usuario: 'Sulfur', email: 'Sulfur@gmail.com', nombre: 'Oscar', apellido: 'S'},
  {usuario: 'Chlorine', email: 'Chlorine@gmail.com', nombre: 'Benito', apellido: 'Cl'},
  {usuario: 'Argon', email: 'Argon@gmail.com', nombre: 'Laura', apellido: 'Ar'},
  {usuario: 'Potassium', email: 'Potassium@gmail.com', nombre: 'Fenix', apellido: 'K'},
  {usuario: 'Calcium', email: 'Calcium@gmail.com', nombre: 'Esteban', apellido: 'Ca'},
];

@Component({
  selector: 'app-first-formulario',
  templateUrl: './first-formulario.component.html',
  styleUrls: ['./first-formulario.component.css']
})
export class FirstFormularioComponent implements AfterViewInit  {

  displayedColumns: string[] = ['usuario', 'email', 'nombre', 'apellido','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog){ }

  openDialog() {
    this.dialog.open(DialogContentExampleDialog);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getRecord(usuario:any){
    alert(usuario)
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}








