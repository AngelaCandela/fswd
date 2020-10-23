Funcion promedio <- calcular_promedio (array, tamano)
	Definir suma, i Como Entero;
	Definir promedio Como Real;
	suma = 0;
	
	Para i = 0 Hasta tamano-1 Hacer
		suma = suma + array[i];
	FinPara
	
	promedio = suma/tamano;
	
Fin Funcion

Algoritmo ej_53
	
	Definir array, tamano, i Como Entero;
	Escribir "Introduce la cantidad de datos.";
	Leer tamano;
	
	Dimension array[tamano];
	
	Escribir "Introduce los elementos hasta ", tamano, ".";
	Para i= 0 hasta tamano-1 Hacer		
		Leer array[i];
	FinPara
	
	Escribir "El promedio del array es: ", calcular_promedio(array, tamano), ".";
FinAlgoritmo
