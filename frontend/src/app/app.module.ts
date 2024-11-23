import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor

@NgModule({
  declarations: [
    AppComponent,
    ListaElementosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Asegúrate de incluirlo
    CommonModule       // Asegúrate de incluirlo para *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
