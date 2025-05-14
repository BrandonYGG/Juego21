export default {
  server: {
    port: process.env.PORT || 3000,  // Escucha en el puerto proporcionado por Railway o en el puerto 3000
    host: '0.0.0.0',  // Asegúrate de que sea accesible desde fuera de la máquina local
  },
  preview: {
    port: process.env.PORT || 3000,  // Usa el mismo puerto para la vista previa
    host: '0.0.0.0',  // Asegúrate de que sea accesible desde fuera de la máquina local
  }
}
