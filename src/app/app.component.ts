import { Component } from '@angular/core';
import {Celula} from './celula.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDPDA2';

  grid = null;
  limit = null;
  colun = null;
  line = null;
  matriz = [];
  listaDeAvalanches = [];
  repeticao = 0;
  quantidadeRepeticoes = null;
  quantidadeAvalanches = 0;

  buttom = 'alterar';

  constructor() { }

  GerarMatrix(dadosMatriz) {
    this.grid = Number(this.grid);
    this.limit = Number(this.limit);
    this.matriz = [];
    this.repeticao = 0;
    this.quantidadeAvalanches = 0;

    for ( let b = 0; b < this.grid; b++) {
      this.matriz.push([]);
      for ( let y = 0; y < this.grid; y++) {
        const x = Math.floor((Math.random() * this.limit - 1) + 1);
        this.matriz[b].push(new Celula(x, 'white'));
      }
    }
  }

  AlteraCelula() {
    this.colun = Math.floor((Math.random() * this.grid - 1) + 1);
    this.line = Math.floor((Math.random() * this.grid - 1) + 1);
    this.matriz[this.line][this.colun].numero++;
    this.repeticao++;

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
        if (this.matriz[cont][cont1].numero >= this.limit) {
          allRight = false;
          allRight1 = false;
          this.colun = cont1;
          this.line = cont;
          this.quantidadeAvalanches++;
          this.listaDeAvalanches.push('Avalanche! Linha: ' + (this.line + 1) + '; Coluna: ' + (this.colun + 1) + '; Repetição: ' + this.repeticao + '; Avalanche Nº: ' + this.quantidadeAvalanches + '.');
          this.AvalancheCor();
          this.buttom = 'prosseguir';
        } else {
          this.buttom = 'alterar';
        }
        if (cont1 === (this.grid - 1)) {
          allRight1 = false;
        }
        cont1++;
      }
      if (cont === (this.grid - 1)) {
        allRight = false;
      }
      cont++;
    }
  }

  editarSuperior() {
    this.matriz[this.line - 1][this.colun].numero++;
    this.matriz[this.line - 1][this.colun].cor = 'white';
  }

  editarInferior() {
    this.matriz[this.line + 1][this.colun].numero++;
    this.matriz[this.line + 1][this.colun].cor = 'white';
  }

  editarEsquerda() {
    this.matriz[this.line][this.colun - 1].numero++;
    this.matriz[this.line][this.colun - 1].cor = 'white';
  }

  editarDireita() {
    this.matriz[this.line][this.colun + 1].numero++;
    this.matriz[this.line][this.colun + 1].cor = 'white';
  }

  editarFoco() {
    this.matriz[this.line][this.colun].numero -= 4;
    this.matriz[this.line][this.colun].cor = 'white';
  }

  Avalanche() {
    if (this.colun === 0) {
      if (this.line === 0) {
        this.editarFoco();
        this.editarDireita();
        this.editarInferior();

      } else if (this.line === (this.grid - 1)) {
        this.editarFoco();
        this.editarDireita();
        this.editarSuperior();

      } else {
        this.editarFoco();
        this.editarSuperior();
        this.editarDireita();
        this.editarInferior();
      }
    } else if (this.colun === (this.grid - 1)) {
      if (this.line === 0) {
        this.editarFoco();
        this.editarInferior();
        this.editarEsquerda();

      } else if (this.line === (this.grid - 1)) {
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
      if (this.line === 0) {
        this.editarFoco();
        this.editarEsquerda();
        this.editarDireita();
        this.editarInferior();

      } else if (this.line === (this.grid - 1)) {
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

  editarCorSuperior() {
    this.matriz[this.line - 1][this.colun].cor = 'green';
  }

  editarCorInferior() {
    this.matriz[this.line + 1][this.colun].cor = 'green';
  }

  editarCorEsquerda() {
    this.matriz[this.line][this.colun - 1].cor = 'green';
  }

  editarCorDireita() {
    this.matriz[this.line][this.colun + 1].cor = 'green';
  }

  editarCorFoco() {
    this.matriz[this.line][this.colun].cor = 'red';
  }

  AvalancheCor() {
    if (this.colun === 0) {
      if (this.line === 0) {
        this.editarCorFoco();
        this.editarCorDireita();
        this.editarCorInferior();

      } else if (this.line === (this.grid - 1)) {
        this.editarCorFoco();
        this.editarCorDireita();
        this.editarCorSuperior();

      } else {
        this.editarCorFoco();
        this.editarCorSuperior();
        this.editarCorDireita();
        this.editarCorInferior();
      }
    } else if (this.colun === (this.grid - 1)) {
      if (this.line === 0) {
        this.editarCorFoco();
        this.editarCorInferior();
        this.editarCorEsquerda();

      } else if (this.line === (this.grid - 1)) {
        this.editarCorFoco();
        this.editarCorSuperior();
        this.editarCorEsquerda();

      } else {
        this.editarCorFoco();
        this.editarCorSuperior();
        this.editarCorEsquerda();
        this.editarCorInferior();
      }
    } else {
      if (this.line === 0) {
        this.editarCorFoco();
        this.editarCorEsquerda();
        this.editarCorDireita();
        this.editarCorInferior();

      } else if (this.line === (this.grid - 1)) {
        this.editarCorFoco();
        this.editarCorSuperior();
        this.editarCorEsquerda();
        this.editarCorDireita();

      } else {
        this.editarCorFoco();
        this.editarCorSuperior();
        this.editarCorEsquerda();
        this.editarCorDireita();
        this.editarCorInferior();
      }
    }
  }

  AlteraCelulaContinua() {
    while (this.repeticao < this.quantidadeRepeticoes) {
      this.colun = Math.floor((Math.random() * this.grid - 1) + 1);
      this.line = Math.floor((Math.random() * this.grid - 1) + 1);
      this.matriz[this.line][this.colun].numero++;
      this.repeticao++;

      this.VerificaContinua();
    }
  }

  VerificaContinua() {
    let allRight = true;
    let cont = 0;
    let allRight1 = true;
    let cont1 = 0;

    while (allRight !== false) {
      allRight1 = true;
      cont1 = 0;
      while (allRight1 !== false) {
        if (this.matriz[cont][cont1].numero >= this.limit) {
          allRight = false;
          allRight1 = false;
          this.colun = cont1;
          this.line = cont;
          this.listaDeAvalanches.push('Avalanche! Linha: ' + (this.line + 1) + '; Coluna: ' + (this.colun + 1) + '; Repetição: ' + this.repeticao + '.');
          this.AvalancheCor();
          this.Avalanche();
        }
        if (cont1 === (this.grid - 1)) {
          allRight1 = false;
        }
        cont1++;
      }
      if (cont === (this.grid - 1)) {
        allRight = false;
      }
      cont++;
    }
  }
}
