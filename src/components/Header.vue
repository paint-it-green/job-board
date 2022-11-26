<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthenticated, useSignOut } from '@nhost/vue'
import { isDark, toggleDark } from '~/composables'
const isAuthenticated = useAuthenticated()
const { signOut } = useSignOut()
const router = useRouter()
const handleSignOut = () => {
  signOut()
  router.push('/')
}
</script>

<template>
  <nav text-xl p-3 inline-flex gap-2 wfull>
    <div inline-flex gap-2 flex-grow>
      Job Board
      <button class="icon-btn !outline-none" @click="toggleDark()">
        <div v-if="isDark" i-carbon-moon />
        <div v-else i-carbon-sun />
      </button>
    </div>

    <div v-if="!isAuthenticated" text-sm inline-flex gap-2>
      <router-link class="btn" to="/sign-in">
        Sign In
      </router-link>
      <router-link class="btn" to="/sign-up">
        Sign Up
      </router-link>
    </div>

    <div v-if="isAuthenticated" text-sm inline-flex gap-2>
      <button v-if="isAuthenticated" class="btn">
        My Account
      </button>
      <button
        v-if="isAuthenticated"
        class="icon-btn !outline-none"
        @click="handleSignOut"
      >
        <div i-carbon-logout />
      </button>
    </div>
  </nav>
</template>
