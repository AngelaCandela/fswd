Algoritmo ej_50
	Definir frase, letra Como Caracter;
	Definir i, contador Como Entero;
	
	Escribir "Introduzca la letra a contar.";	
	Leer letra;
	
	Escribir "Introduzca la frase.";	
	Leer frase;
	
	contador = 0;
	
	Para i = 0 Hasta longitud(frase)-1 Con Paso 1 Hacer
		Si Subcadena(frase,i,i) == letra Entonces
			contador = contador + 1;
		FinSi
	Fin Para
	
	Escribir "La letra ", letra, " ha aparecido ", contador, " veces.";
FinAlgoritmo
