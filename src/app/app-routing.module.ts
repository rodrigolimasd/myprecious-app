import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './calendario-despesas/tabela/tabela.component';

const routes: Routes = [
  {path: '', redirectTo: 'tabela-financeira', pathMatch: 'full'},
  {
    path: 'tabela-financeira',
    component: TabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
