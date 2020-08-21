import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilha-de-areia',
  templateUrl: './pilha-de-areia.component.html',
  styleUrls: ['./pilha-de-areia.component.css']
})
export class PilhaDeAreiaComponent implements OnInit {
  grid = null;
  limit = null;
  colun = null;
  line = null;
  matriz = [];
  listaDeAvalanches = [];

  buttom = 'alterar';

  constructor() { }

  GerarMatrix(dadosMatriz) {
    this.grid = Number(this.grid);
    this.limit = Number(this.limit);

    for ( let b = 0; b < this.grid; b++) {
      this.matriz.push([]);
      for ( let y = 0; y < this.grid; y++) {
        const x = Math.floor((Math.random() * this.limit - 1) + 1);
        this.matriz[b].push(x);
      }
    }
  }

  AlteraCelula() {
    this.colun = Math.floor((Math.random() * this.grid - 1) + 1);
    this.line = Math.floor((Math.random() * this.grid - 1) + 1);
    this.matriz[this.line][this.colun]++;

    this.Verifica();
  }

  Verifica() {
    let allRight = true;
    let cont = 0;
    let allRight1 = true;
    let cont1 = 0;

    while (allRight !== false) {
      allRight1 = true;
      cont1 = 0;
      while (allRight1 !== false) {
        if (this.matriz[cont][cont1] >= this.limit) {
          allRight = false;
          allRight1 = false;
          this.colun = cont1;
          this.line = cont;
          this.listaDeAvalanches.push('Avalanche! Coluna: ' + (this.colun + 1) + '; Linha: ' + (this.line + 1) + ';');
          this.buttom = 'prosseguir';
        }
        if (cont1 === (this.grid - 1)) {
          allRight1 = false;
        }
        cont1++;
      }
      if (cont === (this.grid - 1)) {
        this.buttom = 'alterar';
        allRight = false;
      }
      cont++;
    }
  }

  editarSuperior() {
    this.matriz[this.line - 1][this.colun]++;
  }

  editarInferior() {
    this.matriz[this.line + 1][this.colun]++;
  }

  editarEsquerda() {
    this.matriz[this.line][this.colun - 1]++;
  }

  editarDireita() {
    this.matriz[this.line][this.colun + 1]++;
  }

  editarFoco() {
    this.matriz[this.line][this.colun] -= 4;
  }

  Avalanche() {
    if (this.colun == 0) {
      if (this.line == 0) {
        this.editarFoco();
        this.editarDireita();
        this.editarInferior();

      } else if (this.line == (this.grid - 1)) {
        this.editarFoco();
        this.editarDireita();
        this.editarSuperior();

      } else {
        this.editarFoco();
        this.editarSuperior();
        this.editarDireita();
        this.editarInferior();
      }
    } else if (this.colun == (this.grid - 1)) {
      if (this.line == 0) {
        this.editarFoco();
        this.editarInferior();
        this.editarEsquerda();

      } else if (this.line == (this.grid - 1)) {
        this.editarFoco();
        this.editarSuperior();
        this.editarEsquerda();

      } else {
        this.editarFoco();
        this.editarSuperior();
        this.editarEsquerda();
        this.editarInferior();
      }
    } else {
      if (this.line == 0) {
        this.editarFoco();
        this.editarEsquerda();
        this.editarDireita();
        this.editarInferior();

      } else if (this.line == (this.grid - 1)) {
        this.editarFoco();
        this.editarSuperior();
        this.editarEsquerda();
        this.editarDireita();

      } else {
        this.editarFoco();
        this.editarSuperior();
        this.editarEsquerda();
        this.editarDireita();
        this.editarInferior();
      }
    }

    this.Verifica();
  }

  ngOnInit(): void {
  }

}
