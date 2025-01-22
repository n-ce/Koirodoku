import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';


export default defineConfig(({ command }) => ({
  base: '/Koirodoku/',
  css: {
    postcss: {
      plugins: [postcssJitProps(OpenProps)]
    }
  },
  plugins: [
    solidPlugin(),
    VitePWA({
      manifest: {
        "short_name": "Koirodoku",
        "name": "Koirodoku",
        "description": "A 2x2 colored version of sudoku.",
        "icons": [
          {
            "purpose": "maskable",
            "sizes": "48x48",
            "src": "maskable_icon_x48.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "72x72",
            "src": "maskable_icon_x72.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "96x96",
            "src": "maskable_icon_x96.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "128x128",
            "src": "maskable_icon_x128.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "192x192",
            "src": "maskable_icon_x192.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable",
            "sizes": "384x384",
            "src": "maskable_icon_x384.png",
            "type": "image/png"
          },
          {
            "purpose": "maskable any",
            "sizes": "512x512",
            "src": "maskable_icon_x512.png",
            "type": "image/png"
          }
        ]
        ,
        "start_url": "/",
        "display": "standalone",
        "theme_color": "#073b4c",
        "background_color": "#073b4c",
      },
      disable: command !== 'build',
      includeAssets: ['*.woff2']
    })
  ]
}));


