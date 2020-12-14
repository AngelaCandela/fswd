Algoritmo ej_22
	Definir num, suma Como Entero
	suma = 0
	num = 1
	Mientras num>=1 Y num<=100 Hacer
		Si num mod 2 = 0 O num mod 3= 0 Entonces
			Escribir num
			suma = suma + num
			num = num + 1
		SiNo
			num = num + 1
		FinSi
	Fin Mientras
	Escribir "La suma es ", suma, "."
FinAlgoritmo
