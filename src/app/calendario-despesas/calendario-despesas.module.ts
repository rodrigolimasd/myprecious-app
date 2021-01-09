import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SaldoDiaService } from './saldo-dia.service';

@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    SaldoDiaService
  ]
})
export class CalendarioDespesasModule { }
