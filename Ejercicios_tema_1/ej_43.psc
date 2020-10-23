Algoritmo ej_43
	Definir h, m, s Como Entero;
	Definir reloj Como Logico;
	h = 0;
	m = 0;
	s = 0;
	reloj = Verdadero;
	
	Mientras reloj Hacer
		Para h = 0 Hasta 23 Con Paso 1 Hacer		
			Para m = 0 Hasta 59 Con Paso 1 Hacer
				Para s = 0 Hasta 59 Con Paso 1 Hacer				
					Si h < 10 Entonces					
						Si m < 10 Entonces						
							Si s < 10 Entonces
								Escribir "0",h, ":0", m, ":0", s;
							SiNo
								Escribir "0",h, ":0", m, ":", s;
							FinSi
						SiNo
							Escribir "0",h, ":", m, ":", s;
						FinSi
					SiNo
						Escribir h, ":", m, ":", s;
					FinSi				
					Esperar 1 Segundos;
					Limpiar Pantalla;
				Fin Para
			Fin Para
		Fin Para		
	Fin Mientras
FinAlgoritmo
