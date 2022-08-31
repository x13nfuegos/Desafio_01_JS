let evento =  prompt(`Donde quieres salir hoy:
1. SANA / Recital
2. GeekParty / Festival
3. Puerto Piojo / Documental 360
4. Tour Isla Maciel / Paseo
Selecciona X para temrinar
`)

let suma = " "
let total = 0

while (evento != "X" && evento != "x") {
  switch (evento) {
    case "1":
      suma = 700
      break;
    case "2":
      suma = 800
      break;
    case "3":
      suma = 600
      break;
    case "4":
      suma = 500
      break;
    default:
      suma = 0
      break;  
  }

  total += suma
  evento = prompt (`Donde quieres salir hoy:
  1. SANA / Recital
  2. GeekParty / Festival
  3. Puerto Piojo / Documental 360
  4. Tour Isla Maciel / Paseo
  Selecciona X para temrinar
  `)
}
alert(`Tienes acumulado un total de: ${total}`)

  

