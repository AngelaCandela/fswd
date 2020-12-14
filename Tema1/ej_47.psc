Algoritmo ej_47
	Definir array, tamano, i, j, num, aux Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		num = Aleatorio(1,100);
		array[i] = num;
		Escribir array[i], " " Sin Saltar;
	Fin Para
	
	Para j = 0 Hasta tamano-2 Con Paso 1 Hacer
		Para i = 0  Hasta tamano-2 Con Paso 1 Hacer
			Si array[i] > array[i+1] Entonces
				aux = array[i];
				array[i] = array[i+1];
				array[i+1] = aux;				
			FinSi
		Fin Para
	Fin Para
	
	Escribir "";
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer		
		Escribir array[i], " " Sin Saltar;
	Fin Para
	Escribir "";
FinAlgoritmo
