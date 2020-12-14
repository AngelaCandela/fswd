Algoritmo ej_32
	Definir año Como Entero;
	Escribir "Introduzca el año";
	Leer año;
	Si año mod 4 == 0 O año mod 100 <> 0 O año mod 400 == 0 Entonces
		Escribir "año bisiesto";
	SiNo
		Escribir "no bisiesto";
	FinSi
	
FinAlgoritmo
