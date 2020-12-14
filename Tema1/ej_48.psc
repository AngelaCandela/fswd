Algoritmo ej_48
	Definir array_nombres, nombre, aux Como Caracter;
	Definir i, j, tamano, contador Como Entero;
	tamano = 1000;
	Dimension array_nombres[tamano];
	contador = 0;	
	
	
	Escribir "Introducir nombre.";
	Leer nombre;
	Mientras nombre <> "" Hacer
		array_nombres[contador] = nombre;
			
		Si nombre <> "" Entonces
			contador = contador +1;
		FinSi
		
		Escribir "Introducir nombre.";
		Leer nombre;
	Fin Mientras		
	
	Para i = 0 Hasta contador-1 Con Paso 1 Hacer
		Escribir array_nombres[i], ", " Sin Saltar;
	Fin Para		
	
	Para i = 0 Hasta contador-2 Con Paso 1 Hacer
		Para j = 0  Hasta contador-2 Con Paso 1 Hacer
			Si array_nombres[j] > array_nombres[j+1] Entonces
				aux = array_nombres[j];
				array_nombres[j] = array_nombres[j+1];
				array_nombres[j+1] = aux;				
			FinSi
		Fin Para
	Fin Para
	
	Escribir "";
	Para i = 0 Hasta contador-1 Con Paso 1 Hacer
		Escribir array_nombres[i], ", " Sin Saltar;
	Fin Para
	Escribir "";	

	
FinAlgoritmo
