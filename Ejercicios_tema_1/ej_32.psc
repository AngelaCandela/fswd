Algoritmo ej_32
	Definir a�o Como Entero;
	Escribir "Introduzca el a�o";
	Leer a�o;
	Si a�o mod 4 == 0 O a�o mod 100 <> 0 O a�o mod 400 == 0 Entonces
		Escribir "a�o bisiesto";
	SiNo
		Escribir "no bisiesto";
	FinSi
	
FinAlgoritmo
