Funcion hay_otro_igual <- existe ( array, limite_superior, elemento )
	Definir j Como Entero;
	Definir hay_otro_igual Como Logico;
	hay_otro_igual = Falso;
	
	Para j= 0 Hasta limite_superior-1 Con Paso 1 Hacer
		Si limite_superior > 0 Y elemento == array[j] Entonces
			hay_otro_igual = Verdadero;
		FinSi
	Fin Para	
Fin Funcion


Algoritmo ej_41_con_funcion
	Definir array, i, j, tamano, num_aleatorio Como Entero;
	Definir hay_otro_igual Como Logico;
	tamano = 20;
	Dimension array[20];
	
	
	// Bucle que irá rellenando el array
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		
		// Generará un aleatorio único
		Repetir
			num_aleatorio = Aleatorio(0,19);			
		Mientras Que existe(array, i, num_aleatorio)
		
		// Asigno el aleatorio generado
		array[i] = num_aleatorio;		
	Fin Para
	
	Para i = 0 Hasta tamano-1 Con Paso 1 Hacer
		Escribir array[i], Sin Saltar;
		Si i < tamano-1 Entonces
			Escribir ", " Sin Saltar;
		SiNo
			Escribir ".";
		FinSi
	Fin Para
	
FinAlgoritmo
