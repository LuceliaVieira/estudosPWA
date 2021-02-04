import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';



describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*ADIÇÃO*/

  it('ADIÇÃO: deve retornar 5 para 2 e 3', () => {
		expect(component.adicionar(2, 3)).toEqual(5);
	});

	it('ADIÇÃO: deve retornar 6 para 9 e -3 no formato texto', () => {
		expect(component.adicionar('9', '-3')).toEqual(6);
	});

	it('ADIÇÃO: deve retornar 4.5 para 1.5 e 3', () => {
		expect(component.adicionar(1.5, 3)).toEqual(4.5);
	});

	it('ADIÇÃO: deve retornar 0 quando valor 1 não for numérico', () => {
		expect(component.adicionar(undefined, 10)).toEqual(0);
	});

	it('ADIÇÃO: deve retornar 0 quando valor 2 não for numérico', () => {
		expect(component.adicionar(10, undefined)).toEqual(0);
  });

  /* SUBTRAÇÃO*/

  it('SUBTRAÇÃO: deve retornar 5 para 8 e 3', () => {
		expect(component.subtrair(8, 3)).toEqual(5);
	});

	it('SUBTRAÇÃO: deve retornar 5 para 8 e 3 em formato texto', () => {
		expect(component.subtrair('8', '3')).toEqual(5);
	});

	it('SUBTRAÇÃO: deve retornar 4 para 5.5 e 1.5', () => {
		expect(component.subtrair(5.5, 1.5)).toEqual(4);
		expect(component.subtrair('5.5', '1.5')).toEqual(4);
	});

	it('SUBTRAÇÃO: deve retornar 0 para valor 1 inválido', () => {
		expect(component.subtrair(undefined, 5)).toEqual(0);
	});

	it('SUBTRAÇÃO: deve retornar 0 para valor 2 inválido', () => {
		expect(component.subtrair(5, undefined)).toEqual(0);
  });

  /*MULTIPLICAÇÃO*/

  it('MULTIPLICAÇÃO: deve retornar 6 para 2 e 3', function() {
		expect(component.multiplicar(2, 3)).toEqual(6);
	});

	it('MULTIPLICAÇÃO: deve retornar 6 para 2 e 3 em formato texto', function() {
		expect(component.multiplicar(2, 3)).toEqual(6);
	});

	it('MULTIPLICAÇÃO: deve retornar 4.5 para 1.5 e 3', function() {
		expect(component.multiplicar(1.5, 3)).toEqual(4.5);
	});

	it('MULTIPLICAÇÃO: deve retonar 0 para valor 1 inválido', function() {
		expect(component.multiplicar(undefined, 4)).toEqual(0);
	});

	it('MULTIPLICAÇÃO: deve retonar 0 para valor 2 inválido', function() {
		expect(component.multiplicar(4, undefined)).toEqual(0);
  });

  /*DIVISÃO*/

  it('DIVISÃO: deve retornar 2 para 6 e 3', function() {
		expect(component.dividir(6, 3)).toEqual(2);
	});

	it('DIVISÃO: deve retornar 2 para 6 e 3 no formato texto', function() {
		expect(component.dividir('6', '3')).toEqual(2);
	});

	it('DIVISÃO: deve retornar 1.5 para 4.5 e 3', function() {
		expect(component.dividir(4.5, 3)).toEqual(1.5);
	});

	it('DIVISÃO: deve retornar "Erro" para divisão por 0', function() {
		expect(component.dividir(5, 0)).toEqual('Erro');
	});

	it('DIVISÃO: deve retornar 0 para valor 1 inválido', function() {
		expect(component.dividir(undefined, 5)).toEqual(0);
	});

	it('DIVISÃO: deve retornar 0 para valor 2 inválido', function() {
		expect(component.dividir(5, undefined)).toEqual(0);
	});
});
