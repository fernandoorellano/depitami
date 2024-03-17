import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuiensomosComponent } from './paginas/quiensomos/quiensomos.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PromocionesComponent } from './paginas/promociones/promociones.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { IniciosesionComponent } from './paginas/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    InicioComponent,
    NavbarComponent,
    QuiensomosComponent,
    CarruselComponent,
    PromocionesComponent,
    ModalComponent,
    ContactoComponent,
    IniciosesionComponent,
    RegistroComponent,
    TurnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
