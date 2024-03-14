/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// import createPinia from "./stores/index";
// Composables
import { createApp } from 'vue'

const app = createApp(App)
// app.use(createPinia);
// app.use(router);
registerPlugins(app)

app.mount('#app')
