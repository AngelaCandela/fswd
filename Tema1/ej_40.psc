Algoritmo ej_40
	Definir array_1, array_2, tamano, i, num1, num2 Como Entero;
	Definir son_iguales Como Logico;
	
	son_iguales = Verdadero;
	
	Leer tamano;
	
	Dimension array_1[tamano];
	Dimension array_2[tamano];
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Leer num1, num2;
		array_1[i] = num1;
		array_2[i] = num2;
	Fin Para
	
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Si array_1[i] <> array_2[i] Entonces
			son_iguales = Falso;			
			Escribir "Los elementos de array_1 y array_2 con índice ", i, " no coinciden.";		
		FinSi		
	Fin Para
	
	Si son_iguales Entonces
		Escribir  "Son iguales.";
	SiNo
		Escribir  "No son iguales.";
	FinSi
	
FinAlgoritmo
