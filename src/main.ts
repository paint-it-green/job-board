/* eslint-disable @typescript-eslint/comma-dangle,curly */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { NhostClient } from '@nhost/vue'
import { createApolloClient } from '@nhost/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import type { PluginOptions } from 'vue-toastification'
import Toast, { POSITION } from 'vue-toastification'
import App from './App.vue'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'vue-toastification/dist/index.css'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION
})

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.path === '/profile' && !(await nhost.auth.isAuthenticatedAsync())) {
    return '/sign-in'
  }
  return true
})

const apolloClient = createApolloClient({ nhost })

app.use(router).use(nhost).provide(DefaultApolloClient, apolloClient)
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  icon: true,
  rtl: false
}
app.use(Toast, options)
app.mount('#app')
