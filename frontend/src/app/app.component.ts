import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AcademyApp';  // Título de tu aplicación
  data: any[] = [];  // Inicializa data como un arreglo vacío
  error: string = '';  // Inicializa error como una cadena vacía

  constructor(private elementosService: DataService) { }

  ngOnInit(): void {
    // Suscríbete al servicio y maneja la respuesta y los errores
    this.elementosService.obtenerDatos().subscribe(
      (response: any[]) => {
        this.data = response;  // Asigna los datos a la propiedad 'data'
      },
      (error: any) => {
        this.error = 'Ocurrió un error al cargar los datos';  // Asigna el mensaje de error
        console.error('Error al cargar los datos:', error);  // Muestra el error en la consola
      }
    );
  }
}
