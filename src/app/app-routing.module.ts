import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PromocionesComponent } from './paginas/promociones/promociones.component';
import { QuiensomosComponent } from './paginas/quiensomos/quiensomos.component';
import { IniciosesionComponent } from './paginas/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';

const routes: Routes = [
    {path: "",  redirectTo: "inicio", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "promociones", component: PromocionesComponent},
    {path: "reserva", component: TurnosComponent},
    {path: "contacto", component: QuiensomosComponent},
    {path: "inicio-sesion", component: IniciosesionComponent},
    {path: "registro", component: RegistroComponent},
    // {path: "agregar/:anoNuevo", component: AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
