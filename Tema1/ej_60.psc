Algoritmo ej_60
	Definir array, centros, cursos, alumnos, n_centros, n_cursos, n_alumnos, num, suma_curso, centro_max Como Entero;
	Definir promedio, array2, media_max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension array[n_centros,n_cursos,n_alumnos];
	Dimension array2[n_centros,n_cursos];
	suma_curso = 0;
	media_max = 0;
	
	Para centros = 0 Hasta n_centros-1 Con Paso 1 Hacer
		Para cursos = 0 Hasta n_cursos-1 Con Paso 1 Hacer
			Para alumnos = 0 Hasta n_alumnos-1 Con Paso 1 Hacer
				num = Aleatorio(1,10);
				array[centros,cursos,alumnos] = num;
				Escribir array[centros,cursos,alumnos], "   " Sin Saltar;
				suma_curso = suma_curso + num;				
			Fin Para
			promedio = suma_curso/n_alumnos;
			Escribir "Media; ", promedio;
			Si centros == 0 Y cursos == 0 O promedio > media_max Entonces
				media_max = promedio;
				centro_max = centros;
			FinSi
			suma_curso = 0;
			Escribir "";
		Fin Para
		Escribir "";
	Fin Para
	
	Escribir "La nota media máxima es ", media_max, " y pertenece al centro ", centro_max, ".";
FinAlgoritmo

	