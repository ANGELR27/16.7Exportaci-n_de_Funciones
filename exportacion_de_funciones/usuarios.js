export function crearUsuario(nombre, rol) {
  const fechaActual = new Date().toLocaleDateString("es-CO");
  return {
    nombre,
    rol,
    fechaRegistro: fechaActual,
  };
}
