import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrls: ['./lista-elementos.component.css']
})
export class ListaElementosComponent implements OnInit {

  elementos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtenerDatos().subscribe(
      (data) => {
        this.elementos = data;
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}
