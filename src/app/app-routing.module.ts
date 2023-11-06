import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import { TerminalesComponent } from './terminales/terminales.component';
import { GitComponent } from './git/git.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'terminales', component: TerminalesComponent},
  {path:'git', component: GitComponent},
  {path:'angular', component: AngularComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
