import json

entrada = open("Entrada2.json", "r", encoding="utf-8")

cabecera = entrada.readline().strip().split(',')

print("CABECERA", cabecera)

estadisticas_equipo = []

for line in entrada:
	estadisticas_jugador = {}
	jugador = line.strip().split(',')
	for valor in zip(cabecera, jugador):
		estadisticas_jugador[valor[0]] = valor[1]
	estadisticas_equipo.append(estadisticas_jugador)

	print(len(jugador))

entrada.close()

print(json.dumps(estadisticas_equipo, indent=2, ensure_ascii=False))