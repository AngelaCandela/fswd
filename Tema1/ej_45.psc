Algoritmo ej_45
	Definir array_1, array_2, tamano, i, num, contador Como Entero;
	
	tamano = 7;
	
	Dimension array_1[tamano];
	Dimension array_2[tamano];		
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		num = Aleatorio(1,100);
		array_1[i] = num;		
	FinPara
	
	contador = 0;
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Si array_1[i] mod 2 = 0 Y array_1[i] > 25 Entonces
			array_2[contador] = array_1[i];
			contador = contador + 1;
		FinSi		
	Fin Para
	
	Escribir "array_1:";
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir i, ": ", array_1[i];		
	Fin Para
	
	Si contador > 0 Entonces
		Escribir "";
		Escribir "array_2:";
		Para i = 0 Hasta contador-1 Con Paso 1 Hacer					
			Escribir i, ": ", array_2[i];		
		Fin Para
	SiNo
		Escribir "El array_2 está vacio.";
	Fin Si
	
FinAlgoritmo
