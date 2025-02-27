
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

// Proxy all requests to open.spotify.com
app.use('/', createProxyMiddleware({
  target: 'https://www.youtube.com/', // The target website to proxy
  changeOrigin: true,
  ws: true, // Support WebSocket connections
  pathRewrite: {
    '^/': '/', // Rewrite all incoming requests to open.spotify.com
  },
}));

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
