import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Asegúrate de importar HttpClient
import { Observable } from 'rxjs';

// Si tienes un tipo específico para los datos, créalo como una interfaz
export interface Elemento {
  id: number;
  nombre: string;
  // Agrega los demás campos que esperes de la respuesta de tu API
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Inyecta HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // Método para obtener los datos de la API y devolverlos como un Observable
  obtenerDatos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>('tu-api-url');  // Aquí va la URL de tu API
  }
}
