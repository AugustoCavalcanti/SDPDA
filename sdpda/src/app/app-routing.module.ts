import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PilhaDeAreiaComponent} from './pilha-de-areia/pilha-de-areia.component';

const routes: Routes = [
  {path: '', component: PilhaDeAreiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
