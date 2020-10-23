Algoritmo ej_37
	Definir array_1, array_2, tamano, i, multiplicacion Como Entero;
	tamano = 10;
	Dimension array_1[tamano];
	Dimension array_2[tamano];

Para i = 0 Hasta tamano -1 Con Paso 1 Hacer	
	array_1[i] = Aleatorio(1,20);
	array_2[i] = Aleatorio(1,20);
	multiplicacion = array_1[i]*array_2[i];
	Escribir "El indice es ", i, " y la multiplicación de ambos elementos de los arrays es ", multiplicacion, ".";
Fin Para
FinAlgoritmo
