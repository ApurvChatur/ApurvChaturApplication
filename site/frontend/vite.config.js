import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  // Manifest Data
  let MANIFEST_DATA

  switch (env.VITE_APPLICATION) {
    case 'ApurvChatur':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Apurv Chatur",
        "short_name":"Apurv",
        "display": "standalone",
        "background_color": "#4db5ff",
        "theme_color": "#4db5ff",
        "icons":[
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                            
    case 'AnushreeMandape':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Anushree Mandape",
        "short_name":"Anushree",
        "display": "standalone",
        "background_color": "#C8A2C8",
        "theme_color": "#C8A2C8",
        "icons":[
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                              
    case 'SofieBerkin':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Sofie Berkin",
        "short_name":"Sofie",
        "display": "standalone",
        "background_color": "#06b7b7",
        "theme_color": "#06b7b7",
        "icons":[
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;

    default:
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"",
        "short_name":"",
        "display": "standalone",
        "background_color": "#fff",
        "theme_color": "#fff",
        "icons":[
          {
            src: "Business//favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business//favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
  }

  // Vite Config
  return {
    plugins: [
      react(),
      VitePWA({
        manifest: MANIFEST_DATA
      }),
    ],
  
    resolve: {
      alias: {
        src: "/src",
      },
    },
  }
})
