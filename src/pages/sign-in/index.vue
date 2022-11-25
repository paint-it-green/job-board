<script setup lang="ts">
import { ref } from 'vue'
import { useSignInEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
const {
  signInEmailPassword,
} = useSignInEmailPassword()

const toast = useToast()
const router = useRouter()
const email = ref('')
const password = ref('')
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const { error, isError, needsEmailVerification } = await signInEmailPassword(email, password)
    console.log({error, isError, needsEmailVerification})
  if (isError) {
    toast.error(error?.message)
    return
  }
  if (needsEmailVerification) {
    toast.error('Email is not verified')
    return
  }

  router.push('/')
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" class="input"><br>
    <input v-model="password" type="password" placeholder="Password" class="input"><br>

    <button class="btn-submit" type="submit">
      Sign in
    </button>
    <p>
      No account yet? <router-link to="/sign-up">
        Sign up
      </router-link>
    </p>
  </form>
</template>
