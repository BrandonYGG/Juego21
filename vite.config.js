export default {
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',  // Asegúrate de que sea accesible desde fuera de la máquina local
  },
  preview: {
    port: process.env.PORT || 3000,  // Usa el mismo puerto para la vista previa
    host: '0.0.0.0',  // Asegúrate de que sea accesible desde fuera de la máquina local
    allowedHosts: ['juego21-production.up.railway.app'], // Permite el dominio de Railway
  },
}
