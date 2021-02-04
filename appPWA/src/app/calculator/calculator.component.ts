import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  title: string = "Calculator";
  result = '';
  add: string = '+';
	sub: string = '-';
	div: string = '/';
  mult: string = '*';

  num1: any = '';
  num2: any = '';
  operacao: string = '';

  constructor() { }

  ngOnInit() {}

	adicionar(num1, num2): any{
		return this.calcular(num1, num2, this.add);
	}

	subtrair(num1, num2){
		return this.calcular(num1, num2, this.sub);
	}

	dividir(num1, num2) {
		if (num2 == 0) {
			return 'Erro';
		}

		return this.calcular(num1, num2, this.div);
	}

	multiplicar(num1, num2) {
		return this.calcular(num1, num2, this.mult);
	}

	calcular(num1, num2, operacao) {
		var resultado = 0;

		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		if (isNaN(num1) || isNaN(num2)) {
			return 0;
		}

		switch (operacao) {
			case this.add:
				resultado = num1 + num2;
				break;
			case this.sub:
				resultado = num1 - num2;
				break;
			case this.div:
				resultado = num1 / num2;
				break;
			case this.mult:
				resultado = num1 * num2;
				break;
			default:
				resultado = 0;
				break;
		}

		return resultado;
  }

  setOperator(valor) {
    this.evaluate();
    this.operacao = valor;
  }

  addValue(numero) {
    if (this.operacao === '') {
        this.num1 = this.obterNumero(numero, this.num1);
    } else {
        this.num2 = this.obterNumero(numero, this.num2);
    }
  }

  obterNumero(novoNumero, numeroAtual) {

    console.log(novoNumero, numeroAtual);
    if (numeroAtual.length == 10 || (novoNumero === '.' && numeroAtual.indexOf('.') >= 0)) {
        return;
    }
    if (novoNumero === '.' && (this.result === '0' || numeroAtual === '')) {
        numeroAtual = '0';
    }
    this.result = numeroAtual + novoNumero;
    return this.result;
  }

  evaluate() {
    if (this.num1 === '' || this.num2 === '' || this.operacao === '') {
        return;
    }
    let res:any = '';
    this.num1 = parseFloat(this.num1);
    this.num2 = parseFloat(this.num2);
    switch (this.operacao) {
        case '+':
            res = this.adicionar(this.num1, this.num2);
            break;
        case '-':
            res = this.subtrair(this.num1, this.num2);
            break;
        case '/':
            res = this.dividir(this.num1, this.num2);
            break;
        case '*':
            res = this.multiplicar(this.num1, this.num2);
            break;
    }
    res = res.toString();
    this.result = res.length <= 10 ? res : res.substr(0, 10);
    this.num1 = this.result;
    this.num2 = '';
    this.operacao = '';
}

  cleanCalculator(){
    this.result = ''
    this.num1 = '';
    this.num2 = '';
    this.operacao = '';
  }
}
