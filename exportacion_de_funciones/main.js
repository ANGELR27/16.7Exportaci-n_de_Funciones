import { PI, IVA, DIAS_SEMANA } from "./constantes.js"; // importaciones ejercicio 1

// Tarea 2: Calcular y mostrar área y precio con IVA
const radio = 5;
const areaCirculo = PI * radio ** 2; // Usamos ** 2 para elevar al cuadrado
console.log(`El área de un círculo con radio ${radio} es: ${areaCirculo}`);

const precioProducto = 100;
const precioConIva = precioProducto + precioProducto * IVA;
console.log(
  `Un producto de $${precioProducto} con 19% de IVA cuesta: $${precioConIva}`
);

// Tarea 3: Importar y mostrar el tercer día
// Los arrays empiezan en el índice 0, así que el tercer día es el índice 2
const tercerDia = DIAS_SEMANA[2];
console.log(`El tercer día de la semana es: ${tercerDia}`);
