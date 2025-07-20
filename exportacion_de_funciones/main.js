import { PI, IVA, DIAS_SEMANA } from "./constantes.js";

// Ejercicio 1
const radio = 5;
const area = PI * Math.pow(radio, 2);
console.log(`Área del círculo con radio ${radio}: ${area}`);

const precioBase = 100;
const precioConIVA = precioBase * (1 + IVA);
console.log(`Precio con IVA de un producto que cuesta 100: ${precioConIVA}`);

console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

// Ejercicio 2
import {
  sumar,
  restar,
  multiplicar,
  areaCirculo,
  calcularTotal,
  aplicarImpuestos,
  aplicarDescuento,
  aplicarDescuentoPorRol,
} from "./operaciones-matematicas.js";

console.log("\n--- Funciones Matemáticas ---");
console.log(`Suma 5 + 3 = ${sumar(5, 3)}`);
console.log(`Resta 10 - 7 = ${restar(10, 7)}`);
console.log(`Multiplicación 4 * 6 = ${multiplicar(4, 6)}`);
console.log(`Área de un círculo con radio 7 = ${areaCirculo(7)}`);

// Ejercicio 3
console.log("\n--- Cálculos de Impuestos ---");
const precioUnitario = 100;
const cantidad = 3;
const subtotal = calcularTotal(precioUnitario, cantidad);
console.log(`Subtotal: ${subtotal}`);

const totalConImpuestos = aplicarImpuestos(subtotal);
console.log(`Total con impuestos: ${totalConImpuestos}`);

const totalFinal = aplicarDescuento(totalConImpuestos);
console.log(`Total final con descuento: ${totalFinal}`);

// Ejercicio 4
import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario } from "./usuarios.js";

console.log("\n--- Gestión de Usuarios ---");

const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);

console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

// Ejercicio 5
console.log("\n--- Sistema de Descuentos por Rol ---");

// Compra del admin
const adminCompra = {
  usuario: usuario1,
  precio: 25,
  cantidad: 4,
};

const subtotalAdmin = calcularTotal(adminCompra.precio, adminCompra.cantidad);
const totalImpuestoAdmin = aplicarImpuestos(subtotalAdmin);
const totalConDescuentoAdmin = aplicarDescuentoPorRol(
  totalImpuestoAdmin,
  adminCompra.usuario
);

console.log(`\n[ADMIN] ${adminCompra.usuario.nombre}`);
console.log(`Subtotal: ${subtotalAdmin}`);
console.log(`Con impuestos: ${totalImpuestoAdmin}`);
console.log(`Con descuento por rol: ${totalConDescuentoAdmin}`);

// Compra del cliente
const clienteCompra = {
  usuario: usuario2,
  precio: 50,
  cantidad: 3,
};

const subtotalCliente = calcularTotal(
  clienteCompra.precio,
  clienteCompra.cantidad
);
const totalImpuestoCliente = aplicarImpuestos(subtotalCliente);
const totalConDescuentoCliente = aplicarDescuentoPorRol(
  totalImpuestoCliente,
  clienteCompra.usuario
);

console.log(`\n[CLIENTE] ${clienteCompra.usuario.nombre}`);
console.log(`Subtotal: ${subtotalCliente}`);
console.log(`Con impuestos: ${totalImpuestoCliente}`);
console.log(`Con descuento por rol: ${totalConDescuentoCliente}`);
