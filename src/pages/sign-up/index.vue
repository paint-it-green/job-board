<script setup lang="ts">
import { ref } from 'vue'
import { useSignUpEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const toast = useToast()
const router = useRouter()
const { signUpEmailPassword } = useSignUpEmailPassword()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const { isError, error } = await signUpEmailPassword(email, password, {
    metadata: { firstName, lastName },
  })

  if (isError) {
    toast.error(error!.message)
    return
  }

  toast.success('Successfully registered!')
  router.push('/sign-in')
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="firstName" placeholder="First name" class="input"><br>
    <input v-model="lastName" placeholder="Last name" class="input"><br>
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="input"
    ><br>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="input"
    ><br>

    <button class="btn-submit" type="submit">
      Sign up
    </button>
  </form>
</template>
