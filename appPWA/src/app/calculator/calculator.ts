export class Calculator{
	add: any = '+';
	sub: any = '-';
	div: any = '/';
  mult: any = '*';
  num1: number;
  num2: number;

  constructor(){}

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
};


  // ngOnInit() {
  //   console.log(this.calculadora.adicionar(1,2), "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  // }



  // cleanCalculator(){
  //   this.result = '';
  // }

  // addValue(numberValue){
  //   this.result =  this.result.toString()+numberValue;
  //   //console.log(this.result);
  // }

  // evaluate() {
  //   var res = '';
  //   try {
  //     res = eval(this.result);
  //   } catch (e) {
  //     res = 'Error';
  //     setTimeout(this.cleanCalculator, 1000)
  //   }
  //   this.result = res;
  // }
