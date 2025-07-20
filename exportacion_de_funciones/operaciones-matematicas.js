import { PI } from "./constantes.js";
import { IVA, DESCUENTO } from "./constantes.js";
import { ROLES } from "./usuariosConstantes.js";

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function areaCirculo(radio) {
  return PI * Math.pow(radio, 2);
}

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total * (1 + IVA);
}

export function aplicarDescuento(total) {
  return total * (1 - DESCUENTO);
}

export function aplicarDescuentoPorRol(total, usuario) {
  if (usuario.rol === ROLES.ADMIN) {
    return total * 0.8; // 20% para admin
  } else if (usuario.rol === ROLES.CLIENTE) {
    return total * (1 - DESCUENTO); // 10% para cliente
  } else {
    return total; // sin descuento
  }
}
