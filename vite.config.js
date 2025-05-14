export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    },
    allowedHosts: [
      'juego21-production.up.railway.app'
    ]
  }
};
