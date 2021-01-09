import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SaldoDiaService } from '../saldo-dia.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  saldoDias:[];
  msgErro: any;
  isError = false;

  constructor(
    private saldoDiaService: SaldoDiaService
  ) { }

  ngOnInit() {
    this.getTodosSaldoDias()
  }

  getTodosSaldoDias() {
    this.saldoDiaService.getTodos().subscribe((saldos: any) => {
      this.saldoDias = saldos;
    }, (e) => this.handlerErro(e));
  }

  somarTipo(saldoDia, tipo) {
    let valor = 0;
    saldoDia.transacoes.forEach(receita => {
      if(receita.tipo === tipo){
        valor += receita.valor
      }
    });
    return valor
  }

  getTipo(item){
    return item.tipo === 'DESPESA' ? '-' : '+'
  }

  save(form: NgForm) {



    form.resetForm()
  }

  handlerErro(msgErro) {
    this.msgErro = msgErro.messages;
    this.isError = true;
  }

}
